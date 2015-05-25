# webpack-react-hot-seed
Basic React webpack project seed with <a href="https://github.com/gaearon/react-hot-loader/">react-hot-loader</a>

Switchable production/development modes via environmental variable

Uses a <a href="#palette"><b>Palette</b></a> directory: a simple way to reuse assets across projects à la webpack's <a href="http://webpack.github.io/docs/configuration.html#resolve-fallback"> resolve.fallback</a>

<br>
## Additional features
- support for jsx, es6, via [babel](https://babeljs.io/)
- loader for markdown via [remarkable-loader](https://github.com/unindented/remarkable-loader)
- loaders for sass, css, html, json, images, audio, fonts
- production mode (minification) and development mode (hot-loading); switchable via `$NODE_ENV`
- Don't want to use a palette? Don't export `$PALETTE_DIR` in your shell.

<br>
<br><br>
## <a name="palette"></a> *Palette?*
Share assets across projects by placing them in a "palette" directory and specify that directory as a [`resolve.fallback`](http://webpack.github.io/docs/configuration.html#resolve-fallback) in your projects' `webpack.config.js`.  




A Palette directory is simply a directory specified for webpack's [resolve.fallback](http://webpack.github.io/docs/configuration.html#resolve-fallback) feature. In other words, webpack will search `$PALETTE_DIR` for a module if it doesn't find it in your project's root. This way, you can share your own custom css, html, react components, etc. across your own projects. 


### Palette installation

**1** -  Create a Palette directory. This directory will house the assets that you'll want to share across different projects. It is your *palette* of assets.

```
//You can put this anywhere and name it anything you want.

$ mkdir $HOME/webpack/
```

**2** -  Add a line to your `.bashrc` or `.zshrc` to export the `$PALETTE_DIR` environmental variable.
```
$ echo "export PALETTE_DIR=$HOME/webpack/" >> ~/.zshrc
```

**3** -  Spawn a new shell. To use the boilerplate, just `npm install`. Switch dev environments with `export NODE_ENV=production` and `export NODE_ENV=development`

<br>
<br>
<br>

### Simplified demonstration

```
//In project root directory

$ ls app/
App.jsx  entry.js

$ echo $PALETTE_DIR
/home/slee2/webpack

$ tree /home/slee2/webpack
/home/slee2/webpack
├── CoolButton
│   └── index.jsx
├── monospace.css
└── nice_style
    └── style.scss

```
```javascript
// example entry.js
// this is es6
import React from "react"
import App from "./App.jsx"

import nice_style from "nice_style/style.scss"
import CoolButton from "CoolButton"
import monospace from "monospace.css"
...
```

```
//Back in project's root directory

$ webpack
...
$
//It works, I promise.
//  Webpack cannot find nice_style/style.css in its root directory,
//  so it falls back to $PALETTE_DIR, finds nice_style/style.css,
//  and loads the module. The same goes for CoolButton.
```
