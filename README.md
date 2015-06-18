##Overview##

This is the redesign of my portfolio site. 

**Technologies Used**

+ Yeoman webapp generator
+ SASS
+ PagePiling.js

**Screenshots**

**Challenges**
+ deploying git dist to github pages. The trick is to use git subtree, ie:
    `git subtree push --prefix dist origin gh-pages`

+ getting third-party fonts into dist. `Grunt build` was attributing font libraries to an incorrect url. The trick is to add third-party font libraries explicitly to copy tasks in Gruntfile, ie

```     copy: {
          dist: {
            files: [
              {
                expand: true,
                dot: true,
                cwd: 'bower_components/devicons',
                src: ['fonts/*.*'],
                dest: '<%= config.dist %>'
              }
            ]
          }
        }
```

**Check It Out**

**Grunt Tasks**

*grunt serve*

Serve your source locally into your browser. LiveReload will automatically load any changes to HTML, CSS and JavaScript that you make.

*grunt check*

Check the quality of your source with tools like [JSLint](http://www.jslint.com/), [CSSLint](http://csslint.net/) and [csscss](http://zmoazeni.github.io/csscss/).

*grunt test*

Run any test that you have defined for your source.

*grunt build*

Build the concatenated, minified production version of the source into the `dist` directory.
