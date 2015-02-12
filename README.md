# slush-generator [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-ang.png)](http://badges.enytc.com/for/npm/slush-ang)

> Slush-Ang


## Getting Started

Install slush and slush-ang globally:

`npm i -g slush slush-ang`

### Usage
Use `slush ang` to scaffold out a new component

Add `:controller` as a CLI to add to that component

Available commands

`:module`

`:controller`

`:directive`

`:service`

`:factory`

`:filter`


### Bootstrap (if needed)
`bower i angular angular-ui-router --save`


```
<!DOCTYPE html>
<html ng-app="module">
<head lang="en">
  <meta charset="UTF-8">
  <title>Slush Ang</title>
</head>
<body>
  <ui-view></ui-view>
  
  <script src="bower_components/angular/angular.js"></script>
  <script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
  <script src="module.js"></script>
  <script src="alpha.controller.js"></script>
  <script src="beta.controller.js"></script>
</body>
</html>
```

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/mattmoats/slush-ang/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/mattmoats/slush-ang/issues).

## License

The MIT License

Copyright (c) 2014, Matt Moats

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
