# webpack-palette-react-hot-boilerplate

<p align="center">A minimal starter template for webpack + react projects, with the amazing <a href="https://github.com/gaearon/react-hot-loader/react-hot-loader">react-hot-loader</a></p>

<p align="center">Based off of <a href="https://github.com/gaearon/react-hot-boilerplate">react-hot-boilerplate</a></p>

<p align="center">Uses a <a href="#palette"><b>Palette</b></a> directory: a simple way to reuse of assets across projects à la webpack's <a href="http://webpack.github.io/docs/configuration.html#resolve-fallback"> resolve.fallback</a> feature</p>

## <a name="palette"></a> *Palette?*
A Palette directory is simply a directory specified for webpack's [resolve.fallback](http://webpack.github.io/docs/configuration.html#resolve-fallback) feature. In other words, webpack will look into `$PALETTE_DIR` for modules if it doesn't find it in your project's root. This way, you can share your own custom css, html, react components, etc. across projects. 

*No more copy-pasting, git submoduling, symlinking, local bower git repos, or publishing to bower if you want to reuse assets across projects! Easy modularization + hot-loading = fast development + instant gratification = happy dev!*

## Palette installation

**1** -  Create a Palette directory. This directory will house the assets that you'll want to share across different projects. It is your *palette* of assets.

```
$ mkdir $HOME/my_modules/

//You can really put this anywhere/ name it anything you want.
```

**2** -  Add a line to your `.bashrc` or `.zshrc` to export the `$PALETTE_DIR` environmental variable.
```
$ echo "export PALETTE_DIR=$HOME/my_modules/" >> ~/.zshrc
```

**3** -  Spawn a new shell. Happy development!

</br></br>

## Contrived demonstration

```shell
//In project's root directory
$ ls app/
App.jsx  entry.js
$ ls $PALETTE_DIR/
nice_style/
$ ls $PALETTE_DIR/nice_style/
style.css
```
```javascript
// example entry.js
import React from "react"
import App from "./App.jsx"

import nice_style from "nice_style/style.scss"
```

```shell
//Back in project's root directory
$ webpack
...
$
//It works! Webpack cannot find nice_style/style.css in its root directory, so it falls back to $PALETTE_DIR, finds nice_style/style.css, and loads the module.
```


## Other solutions for reusing assets across projects

### bower

Made something you want to share that other people can/would/should use? [Bower](http://bower.io) was created for sharing useful code for frontend development. [Bower works great with webpack](http://webpack.github.io/docs/usage-with-bower.html)!

If you've made something publicly useful, stable, and non-opinionated, by all means you should publish it!

But hey, a Palette directory means you can have (publically) useless, breaking, and opinionated code! And you can surely use bower side-by-side with a Palette directory. Publish what you want published, keep private what you want to keep private.


### local git packages with bower
Instead of publishing your modules to the internet, you can house them in [local git packages with bower](http://stackoverflow.com/questions/13114781/bower-registering-local-git-package), and `require` them as needed.

*But, lets be real, are you really going to make a git repo for a few lines of css?*

Also, bower clones local git repos, meaning that you'll have to `git update` each module to propagate updates from the master repo. This level of control might be something you want. For the sake of stability/reproducibility, you might want a specific version of a dependency, of which you specific inside `bower.json`.


However, using a Palette directory is more convenient; it eliminates almost all overhead to modularize and share a codebase. For smaller, less "mission-critical" projects, this added convenience may be worth giving up that extra layer of control.


## Other features
- loaders for sass, css, markdown, and json
- support for jsx, es6, via [babel](https://babeljs.io/)
