# Gulp Build

![alt text](http://www.quickmeme.com/img/6d/6df89df6851a2ec728af06465947150c3a6a7e4408857aa44eb99104e77eddcf.jpg)

## Directory Structure:

```
|-- moduleName
    |-- .gitignore
    |-- README.md							// This file ;)
    |-- bower.json							// dependencies, bower main file overrides
    |-- gulpfile.js							// Gulp Tasks
    |-- package.json						// npm dependencies
    |-- dist								// build directory
    |   |-- index.html						// Index for development
    |   |-- moduleName.html					// component partial file for CMS
    |   |-- public							// Public folder, Can change in gulp_config.json
    |       |-- css							// Built CSS files from src/component/*.scss
    |       |   |-- moduleName.all.css
    |       |   |-- moduleName.all.min.css
    |       |   |-- maps
    |       |       |-- moduleName.all.min.css.map
    |       |-- js							// Built JS files from src
    |           |-- moduleName.all.js
    |           |-- moduleName.all.min.js
    |           |-- moduleName.base.js
    |           |-- moduleName.partials.js
    |           |-- maps
    |               |-- moduleName.all.min.js.map
    |   	|-- lib								// Bower + Third party libs
    |       	|-- angular-ui-router.min.js
    |       	|-- angular.min.js
    |-- src									// File structure to be built to dist directory
    |   |-- base_config.json					// ModuleName, dependencies, environment config
    |   |-- gulp_config.json					// Configuration for tasks
    |   |-- index.html							// Index
    |   |-- module.html							// Partial for integration with CMS
    |   |-- component							// slush ang command example
    |       |-- component.controller.js
    |       |-- component.scss
    |       |-- component.module.js
    |       |-- component.routes.js
    |       |-- component.partial.html
    |-- vendor									// Third party files, Everything here goes to dist/public
```

