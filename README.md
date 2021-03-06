# Simple Isomorphic

[![Build Status](http://img.shields.io/travis/diogoazevedos/isomorphic/master.svg)](http://travis-ci.org/diogoazevedos/isomorphic)
[![Dependency Status](https://img.shields.io/david/diogoazevedos/isomorphic.svg)](https://david-dm.org/diogoazevedos/isomorphic)
[![devDependency Status](https://img.shields.io/david/dev/diogoazevedos/isomorphic.svg)](https://david-dm.org/diogoazevedos/isomorphic#info=devDependencies)

> This project template is a skeleton for an [isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
> web application (SPA) based on Facebook's [React](https://facebook.github.io/react/)
> library and [Flux](http://facebook.github.io/flux/) architecture. You can use
> it to quickly bootstrap your web application projects. All the parts of this
> project template are easily replaceable.

### Directory Layout

```
.
├── /dist/                      # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /decorators/            # Higher-order React components
│   ├── /dispatcher/            # Flux application dispatcher
│   ├── /public/                # Static files which are copied into the /dist/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /utils/                 # Utility classe, functions and api calls
│   ├── /views/                 # Views for rendering, emails etc.
│   ├── /Client.js              # Client startup script
│   └── /Server.js              # Server startup script
│── gulpfile.babel.js           # Configuration file for automated builds
│── package.json                # The list of 3rd party libraries and utilities
└── webpack.config.js           # Webpack configuration for bundling and optimization
```

### Getting Started

Just [fork](https://github.com/diogoazevedos/isomorphic/fork) the repo and start hacking:

```shell
$ git clone -o upstream -b master --single-branch \
      https://github.com/diogoazevedos/isomorphic.git Isomorphic
$ cd Isomorphic
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install                   # Install Node.js components listed in package.json
```

### How to Build

```shell
$ gulp build
```

### How to Run

```shell
$ gulp serve                     # or, `gulp serve --watch`
```
