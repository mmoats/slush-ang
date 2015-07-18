# slush-Ang [![npm version](https://badge.fury.io/js/slush-ang.svg)](http://badge.fury.io/js/slush-ang)

> Slush-Ang is a pet project that has grown in to something useful

## Getting Started

Install slush and slush-ang:

`npm i -g gulp slush slush-ang bower browser-sync`

### CLI Usage
Use `slush ang` to scaffold out a new component

Use `slush ang:gulp` to include a gulp based build system and install deps  ** see <a href="https://github.com/mmoats/slush-ang/blob/master/gulp/README.md">gulp/README.md</a> for more info **

Use `slush ang:controller` or one of the commands below to add to that component (Typically not needed)

Available commands(Optional):

`:module`

`:controller`

`:directive`

`:service`

`:factory`

`:filter`

### Example Usage Workflow (quick start)

`mkdir angularmodule && cd $_`

`slush ang:gulp`

or `gulp` to start pointed at local environment

or `NODE_ENV=qa gulp` for different environment

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
