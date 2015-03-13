#react-webpack-hot-palette-boilerplate

<p align="center">A minimal starter template for webpack projects, with the magical [react-hot-loader](https://github.com/gaearon/react-hot-loader/)</p>

<p align="center">Based off of [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)</p>

## usage

1. create a Palette directory, if you don't already have one. This directory will house custom assets you'll want to share across different projects.

```

mkdir ~/palette/
```

2. Add to your .bashrc `export PALETTE_DIR=~/palette/`

3. Spawn a new shell. Happy prototyping!



Eventually you'll have a slew of your own custom, local assets in your Palette directory.


# *Palette?*

## webpack + a palette =  ultra-rapid, DRY, modular frontend prototyping

Find yourself reusing many of your own custom assets across frontend projects?
...aka the same css, same react components, same html?


Use webpack + a Palette directory!

This `$PALETTLE_DIR` is simply a common directory that your webpack projects will reference as a fallback to resolve modules. The webpack creators made this extremely [simple to put into practice](http://webpack.github.io/docs/configuration.html#resolve-fallback).

A Palette directory means instant propagation of changes of your custom *external dependencies*! Plus, if we're hot-loading with webpack, that means the changes to externally dependencies in your Palette directory are propagated instantly to your browser, like what happens with all of your internal dependencies.


    "Sometimes the answer is quantity, not quality. Go for quantity, and then you have more to whittle down for quality." -- some wise guy who isn't me

Eliminate overhead, and increase the rate of your mind-code-screen-eye feedback loop. Don't let gruntwork mess with your roll!


## Other solutions

## bower

Made something you want to share that other people can/would/should use? [Bower](http://bower.io) was created for sharing useful code for frontend development. Bower works great with webpack [link]()!

If you've made something publicly useful, stable, and non-opinionated, by all means you should publish it.

But hey, a Palette directory means you can have publically useless, breaking, and opinionated code!


## local git packages with bower
Instead of publishing your modules to the internet, you could  house them in [local git packages with bower](http://stackoverflow.com/questions/13114781/bower-registering-local-git-package), and `require` them as needed.

*But, lets be real, are you really going to make a git repo for a few lines of css?*

Also, bower clones local git repos, meaning that you'll have to `git update` each module to propagate updates from the master repo. Or you can just do one `bower install`, reinstalling (and therefore updating) all your bower packages. This level of control might be something you want. 



But if you work with a Palette directory, your changes to external modules are read directly. With a Palette, your Palette houses the one and only referenced copy of that code. A Palette is a DRY-er solution than having local, cloned bower packages.






## todo:
 - document using MY_MODULES/
 - change description to something that fits my_modules feature better.
 - check out yeoman


