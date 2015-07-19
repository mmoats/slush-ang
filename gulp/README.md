# Gulp Build

![alt text](http://www.quickmeme.com/img/6d/6df89df6851a2ec728af06465947150c3a6a7e4408857aa44eb99104e77eddcf.jpg)

## Directory Structure:

```
|-- moduleName
    |-- .gitignore
    |-- README.md					// This file ;)
    |-- bower.json					// dependencies, bower main file overrides
    |-- gulpfile.js					// Gulp Tasks
    |-- package.json				//
    |-- dist
    |   |-- index.html
    |   |-- clientlibs
    |       |-- css
    |       |   |-- moduleName.all.css
    |       |   |-- moduleName.all.min.css
    |       |   |-- main.css
    |       |   |-- maps
    |       |       |-- moduleName.all.min.css.map
    |       |-- images
    |       |   |-- ajax-loader.gif
    |       |-- js
    |           |-- moduleName.all.js
    |           |-- moduleName.all.min.js
    |           |-- moduleName.base.js
    |           |-- moduleName.partials.js
    |           |-- maps
    |               |-- moduleName.all.min.js.map
    |   |-- component
    |       |-- moduleName
    |           |-- moduleName.html
    |   |-- lib
    |       |-- angular-ngmodules.js
    |       |-- angular-ui-router.min.js
    |       |-- angular.min.js
    |-- src							// File structure to be built to dist directory
    |   |-- base_config.json			// ModuleName, dependencies, environment config
    |   |-- gulp_config.json			// Configuration for tasks
    |   |-- index.html					// Index
    |   |-- module.html					// Partial for integration
    |   |-- component					// slush ang command example
    |       |-- alpha.controller.js
    |       |-- alpha.partial.html
    |       |-- beta.controller.js
    |       |-- beta.partial.html
    |       |-- component.scss			// Example scss file
    |       |-- module.js
    |       |-- module.partial.html
    |-- vendor
        |-- clientlibs
        |   |-- images
        |       |-- ajax-loader.gif
        |-- lib
            |-- angular-ngmodules.js
```

