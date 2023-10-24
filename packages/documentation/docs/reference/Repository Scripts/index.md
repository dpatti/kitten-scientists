# Full reference

## build:all

-   Project: `kitten-scientists`
-   Source:

    ```shell
    tsc --build
    ```

-   Description:

    _documentation pending_

## clean:all

-   Project: `kitten-scientists`
-   Source:

    ```shell
    rm -rf packages/*/build packages/*/tsconfig.tsbuildinfo
    ```

-   Description:

    _documentation pending_

## devcontainer:build

-   Project: `@kitten-science/kitten-game`
-   Source:

    ```shell
    bash ./scripts/build-development-container.sh
    ```

-   Description:

    Builds the Development Container.

## devcontainer:rebuild

-   Project: `@kitten-science/kitten-game`
-   Source:

    ```shell
    bash ./scripts/rebuild-development-container.sh
    ```

-   Description:

    Rebuilds the development container.

    You're going to want to rebuild your development container every once in a while to ensure you're using the latest version of Kittens Game in your container.

## devcontainer:run

-   Project: `@kitten-science/kitten-game`
-   Source:

    ```shell
    bash ./scripts/run-development-container.sh
    ```

-   Description:

    Builds the development container and starts it.

## docs:build

-   Project: `@kitten-science/documentation`
-   Source:

    ```shell
    .scripts/build.sh
    ```

-   Description:

    Build the documentation.

## docs:nsd

-   Project: `@kitten-science/documentation`
-   Source:

    ```shell
    nsd --cwd=$INIT_CWD --docs-location="packages/documentation/docs/reference/Repository Scripts/"
    ```

-   Description:

    Update the scripts documentation that you are looking at right now.

## docs:serve

-   Project: `@kitten-science/documentation`
-   Source:

    ```shell
    .scripts/serve.sh
    ```

-   Description:

    Start the [mkdocs-material](https://squidfunk.github.io/mkdocs-material/) development server to work on the documentation.

## kitten-scientists:build

-   Project: `@kitten-science/kitten-scientists`
-   Source:

    ```shell
    vite --config vite.config.inject.js build
    ```

-   Description:

    Build the Kitten Scientists userscript.

    This builds the version of the script that is also used in the development container.

## kitten-scientists:preview

-   Project: `@kitten-science/kitten-scientists`
-   Source:

    ```shell
    DEV_BUILD=true vite --config vite.config.userscript.js build
    ```

-   Description:

    Build a development release version of the userscript.

## kitten-scientists:release

-   Project: `@kitten-science/kitten-scientists`
-   Source:

    ```shell
    MINIFY=true vite --config vite.config.userscript.js build
    vite --config vite.config.userscript.js build
    ```

-   Description:

    Build a release version of the Kitten Scientists userscript.

    This is usually only used from CI to build both the regular version of the script, as well as a minified build. When you use this locally, it still builds both files, but clears the output directory between builds. So you end up with only the regular version.

## kitten-scientists:version

-   Project: `@kitten-science/kitten-scientists`
-   Source:

    ```shell
    node version.cjs
    ```

-   Description:

    Returns the version for the Kitten Scientists userscript.

## kitten-scientists:watch

-   Project: `@kitten-science/kitten-scientists`
-   Source:

    ```shell
    vite --config vite.config.inject.js build --watch
    ```

-   Description:

    Builds the Kitten Scientists userscript and watches all files for changes. If changes are detected, the script is rebuilt.

    !!! warning

        This watcher has caused problems in the past, generating broken output. Use at your own risk.

## lint:all

-   Project: `kitten-scientists`
-   Source:

    ```shell
    eslint . --ext .ts
    ```

-   Description:

    Check source code for style issues.

## typecheck:all

-   Project: `kitten-scientists`
-   Source:

    ```shell
    tsc --noEmit --incremental false
    ```

-   Description:

    Run the TypeScript compiler to find problems with the code.
