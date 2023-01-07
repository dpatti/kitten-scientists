# Full reference

## devcontainer:build

-   Project: `@kitten-science/kitten-game`
-   Source:

    ```shell
    docker build --tag kitten-game .
    ```

-   Description:

    Builds the Development Container.

## devcontainer:rebuild

-   Project: `@kitten-science/kitten-game`
-   Source:

    ```shell
    docker build --no-cache --tag kitten-game .
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

    _documentation pending_

## docs:nsd

-   Project: `@kitten-science/documentation`
-   Source:

    ```shell
    nsd --cwd=$INIT_CWD --docs-location="packages/documentation/docs/reference/Repository Scripts/"
    ```

-   Description:

    _documentation pending_

## docs:serve

-   Project: `@kitten-science/documentation`
-   Source:

    ```shell
    .scripts/serve.sh
    ```

-   Description:

    _documentation pending_

## lint:all

-   Project: `kitten-scientists`
-   Source:

    ```shell
    eslint . --ext .ts
    ```

-   Description:

    _documentation pending_

## tests:build

-   Project: `@kitten-science/tests`
-   Source:

    ```shell
    tsc --build
    ```

-   Description:

    _documentation pending_

## tests:run

-   Project: `@kitten-science/tests`
-   Source:

    ```shell
    mocha output/tests/*.spec.js
    ```

-   Description:

    _documentation pending_

## typecheck:all

-   Project: `kitten-scientists`
-   Source:

    ```shell
    tsc --noEmit --incremental false
    ```

-   Description:

    _documentation pending_

## userscript:build

-   Project: `@kitten-science/userscript`
-   Source:

    ```shell
    vite --config vite.config.inject.js build
    ```

-   Description:

    _documentation pending_

## userscript:preview

-   Project: `@kitten-science/userscript`
-   Source:

    ```shell
    DEV_BUILD=true vite --config vite.config.userscript.js build
    ```

-   Description:

    _documentation pending_

## userscript:release

-   Project: `@kitten-science/userscript`
-   Source:

    ```shell
    MINIFY=true vite --config vite.config.userscript.js build
    vite --config vite.config.userscript.js build
    ```

-   Description:

    _documentation pending_

## userscript:version

-   Project: `@kitten-science/userscript`
-   Source:

    ```shell
    node version.cjs
    ```

-   Description:

    _documentation pending_

## userscript:watch

-   Project: `@kitten-science/userscript`
-   Source:

    ```shell
    vite --config vite.config.inject.js build --watch
    ```

-   Description:

    _documentation pending_