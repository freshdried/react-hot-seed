# webpack-palette-react-hot-boilerplate
<p align="center">A basic webpack template for react projects, with the amazing <a href="https://github.com/gaearon/react-hot-loader/react-hot-loader">react-hot-loader</a></p>

<p align="center">Includes a production mode and a development mode, switchable via environmental variable</p>

<p align="center">Uses a <a href="#palette"><b>Palette</b></a> directory: a simple way to reuse assets across projects à la webpack's <a href="http://webpack.github.io/docs/configuration.html#resolve-fallback"> resolve.fallback</a></p>

<br>

Want to reuse a custom stylesheet, or a react component across your projects? Just simply place those assets in a "palette" directory and specify that directory as a [`resolve.fallback`](http://webpack.github.io/docs/configuration.html#resolve-fallback) in your projects' `webpack.config.js`.  



This webpack boilerplate includes a basic `webpack.config.js` that is set up for a palette directory declared via environmental variable. 

*Easy modularization + react-hot-loader = fast development + instant gratification = happy dev!*

<br><br>
## <a name="palette"></a> *Palette?*
A Palette directory is simply a directory specified for webpack's [resolve.fallback](http://webpack.github.io/docs/configuration.html#resolve-fallback) feature. In other words, webpack will search `$PALETTE_DIR` for a module if it doesn't find it in your project's root. This way, you can share your own custom css, html, react components, etc. across your own projects. 


<br>
## Palette installation

**1** -  Create a Palette directory. This directory will house the assets that you'll want to share across different projects. It is your *palette* of assets.

```
//You can put this anywhere and name it anything you want.

$ mkdir $HOME/my_modules/
```

**2** -  Add a line to your `.bashrc` or `.zshrc` to export the `$PALETTE_DIR` environmental variable.
```
$ echo "export PALETTE_DIR=$HOME/my_modules/" >> ~/.zshrc
```

**3** -  Spawn a new shell. Happy development! To use the boilerplate, just `npm install --dev`.

<br>
<br>
<br>

## Simplified demonstration

```
//In project root directory

$ ls app/
App.jsx  entry.js

$ echo $PALETTE_DIR
/home/slee2/my_modules

$ ls ~/my_modules/
nice_style/ cool_button

$ ls ~/my_modules/nice_style/
style.css

$ ls ~/my_modules/CoolButton/
index.jsx
```
```javascript
// example entry.js
import React from "react"
import App from "./App.jsx"

import nice_style from "nice_style/style.scss"
import CoolButton from "CoolButton"
...
```

```
//Back in project's root directory

$ webpack
...
$
//It works, trust me!
//  Webpack cannot find nice_style/style.css in its root directory,
//  so it falls back to $PALETTE_DIR, finds nice_style/style.css,
//  and loads the module. The same goes for CoolButton.
```
## Additional features
- loaders for sass, css, html, markdown, json, image files, audio files, font files
- support for jsx, es6, via [babel](https://babeljs.io/)
- production mode (minification) and development mode (hot-loading); switchable via `$NODE_ENV` from `production` to `development`, and vice-versa
```
//How to switch modes

$ export NODE_ENV=production
$ npm start
...
$ export NODE_ENV=development
$ npm start
...
```

<br><br>
<br><br><br><br>


## Other solutions for reusing assets across projects
### bower

Made something you want to share that other people can use? [Bower](http://bower.io) was created for sharing useful code for frontend development. [Bower works great with webpack](http://webpack.github.io/docs/usage-with-bower.html)!

If you've made something publicly useful, stable, and non-opinionated, by all means you should publish it!

But hey, a Palette directory means you can have (publically) useless, breaking, and opinionated code! And you can surely use bower side-by-side with a Palette directory. Publish what you want published, keep private what you want to keep private.


### local git packages with bower
Instead of publishing your modules to the internet, you can house them in [local git packages with bower](http://stackoverflow.com/questions/13114781/bower-registering-local-git-package), and `require` them as needed.

*But, lets be real, are you really going to make a whole git repo to reuse a couple lines of css? Or a git repo for an image/logo you use on multiple sites?*

With local git packages, you can be ensure reproducibility, specify version numbers, among many other good practices. However, using a Palette directory is more convenient; it eliminates almost all overhead to modularize and share a codebase. For smaller, less "mission-critical" projects with very few developers, the added convenience from a Palette directory may be worth giving up that extra layer of control.
