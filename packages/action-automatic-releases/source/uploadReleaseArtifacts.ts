import * as core from "@actions/core";
import { Context } from "@actions/github/lib/context.js";
import { GitHub } from "@actions/github/lib/utils.js";
import { RestEndpointMethodTypes } from "@octokit/rest";
import { lstatSync, readFileSync } from "fs";
import { globby } from "globby";
import md5File from "md5-file";
import path from "path";
import { NewGitHubRelease } from "./AutomaticReleases.js";

export type UploadReleaseAssetOptions =
  RestEndpointMethodTypes["repos"]["uploadReleaseAsset"]["parameters"];
export const uploadReleaseArtifacts = async (
  client: InstanceType<typeof GitHub>,
  context: Context,
  release: NewGitHubRelease,
  files: string[],
): Promise<void> => {
  core.startGroup("Uploading release artifacts");
  for (const fileGlob of files) {
    const paths = await globby(fileGlob);
    if (paths.length == 0) {
      core.error(`${fileGlob} doesn't match any files`);
    }

    for (const filePath of paths) {
      core.info(`Uploading: ${filePath}`);
      const nameWithExt = path.basename(filePath);
      const uploadArgs: UploadReleaseAssetOptions = {
        owner: context.repo.owner,
        repo: context.repo.repo,
        release_id: release.id,
        url: release.upload_url,
        headers: {
          "content-length": lstatSync(filePath).size,
          "content-type": "text/plain; charset=utf-8",
        },
        name: nameWithExt,
        data: readFileSync(filePath, { encoding: "utf-8" }),
      };

      try {
        await client.rest.repos.uploadReleaseAsset(uploadArgs);
      } catch (err) {
        core.info(
          `Problem uploading ${filePath} as a release asset (${
            (err as Error).message
          }). Will retry with the md5 hash appended to the filename.`,
        );
        const hash = await md5File(filePath);
        const basename = path.basename(filePath, path.extname(filePath));
        const ext = path.extname(filePath);
        const newName = `${basename}-${hash}${ext}`;
        await client.rest.repos.uploadReleaseAsset({
          ...uploadArgs,
          name: newName,
        });
      }
    }
  }
  core.endGroup();
};
