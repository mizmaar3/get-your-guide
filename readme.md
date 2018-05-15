# Get Your Guide - Search box

> Project tested with node v 9.4.0 on a mac system

## Description
Attractions Search tool to setup a structure of the project. The app reads JSON file to search query keyword and display data in a grid.  The JS code is written in [ES6](https://babeljs.io/docs/learn-es2015/) script and packaged with [RollupJs](https://rollupjs.org/guide/en). [Less](http://lesscss.org/) css preprocessor is used to write styles.


## Install

Open folder in terminal, and  install dependencies.

```bash
$ cd your-folder-name && npm install
```


## Build

Run this command to build and bundle the project.

```bash
$ npm run build
```

to keep watching file changes, run

```bash
$ npm run build:watch
```

To get minified+uglified version of bundle.js please run

```bash
$ npm run release
```
> release command also run linting on js files

After build or Release commands the terminal console will show you localhost server url to access index.html (http://localhost:1984)


## Brief Code Explanation

#### The JS folder

- This folder contains all JS code distributed in small components as separate files. index.js is the main file to be compiled by Rollup


#### The DATA Folder

- It contains data.json which is used to be searched for query.


#### The LESS folder

- Less folder contains `.less` files which will be compiled with `buble js` and concatenated into single file `style.css`, can be found in `dist` folder after building project.


### About

- The project is made to show the ability of my coding techniques and project architecture.

- UI is made to be simple and clear as MVP from a front end perspective which needs UX improvements.

- The code is written in JS native to be bundled and loaded in faster time.

- Search Query needs improvements to search keyword(s) as wildcard and result sorted by best matched on top.
