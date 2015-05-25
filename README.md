# webpack-react-hot-seed
React webpack project seed with <a href="https://github.com/gaearon/react-hot-loader/">react-hot-loader</a>

Switchable production/development modes via `$NODE_ENV

## features
- support for jsx, es6, via [babel](https://babeljs.io/)
- loader for markdown via [remarkable-loader](https://github.com/unindented/remarkable-loader)
- loaders for sass, css, html, json, images, audio, fonts
- defaults to development mode (hot-loading); switchable to production mode (minification) via `$NODE_ENV`

<br>
<br><br>
## Optionally share assets locally without npm
One way you can reuse webpack assets across local projects is by placing them in one common directory and specifing that directory as a [`resolve.fallback`](http://webpack.github.io/docs/configuration.html#resolve-fallback) in your projects' `webpack.config.js`.

This boilerplate has this set up for you, and you can choose whether or not to use it. Here webpack is configured to search for assets in a directory specified by the`$WEBPACK_ASSETS` environmental variable. If `$WEBPACK_ASSETS` is not set, nothing bad will happen.


### Asset directory setup
**1** -  Create a directory to store your common assets.

```
$ mkdir $HOME/webpack/
```

**2** -  Add a line to your `.bashrc` or `.zshrc` to export the `$WEBPACK_ASSETS` environmental variable.
```
$ echo "export WEBPACK_ASSETS=$HOME/webpack/" >> ~/.zshrc
```

**3** -  Spawn a new shell. To use the boilerplate, just `npm install`. Switch dev environments with `export NODE_ENV=production` and `export NODE_ENV=development`

<br>
<br>

### demonstration

```
//project root

$ ls app/
app.jsx

$ echo $WEBPACK_ASSETS
/home/slee2/webpack

$ tree /home/slee2/webpack
/home/slee2/webpack
├── MyFooter.jsx
└── mystyles
    └── funky.scss

```
```javascript
//app.jsx
import React from "react"

import MyFooter from "MyFooter"
import "mystyles/funky.scss"
...
```
