### DJ White Rabbit Japan

This is a Vue/TypeScript single page application that retrieves up to 100 top albums from the iTunes API and lists them. Users can search the list by album or artist and, as a special feature of this coding challenge, sort by artist, title, or rating.

### Instructions for Use
- Run 'npm run dev' to start application and go to the the web address specified as Local.
- Once loaded, the page should return up to 100 album cards with artists/titles by rating from the Apple API.
- To search, type in the input box at the top (case-insensitive) and click the button the right to filter titles and artists by that string.
- Clicking the search button with no entry will revert the list to its original state.
- Click the "Sort by Artist A-Z" button to arrange the album cards by artist alphabetically.
- Click the "Sort by Title A-Z" button to arrange the album cards by title alphabetically.
- Click the "Sort by Rating" button to arrange the album cards by their rating, the original presentation from the API.
- All three sort buttons will be applied to filtered-down lists from a search as well.

### Note on Testing

The unit tests for the AlbumList component have their assertions mostly commented out at the moment as I have not successfully found a way to access a mounted wrapper functions from the vm as defined in that component's setup(). The commented out expects() are meant to show my usual thought process as to how I would set up scenarios (reordered albums in this case by accessing html tags).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
