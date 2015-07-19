/*
 * slush-ang
 * https://github.com/mmoats/slush-ang
 *
 * Copyright (c) 2014, Matt Moats
 * Licensed under the MIT license.
 */

var gulp = require('gulp'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    inquirer = require('inquirer'),
    install = require('gulp-install');

gulp.task('default', function(done) {
    inquirer.prompt([{
        name: 'moduleName',
        message: 'Module Name?',
        default: 'module'
    }], function(answers) {
        gulp.src(__dirname + '/module/**')
            .pipe(template(answers))
            .pipe(rename(function(path) {
                path.dirname += '/' + answers.moduleName;
            }))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./src'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('module', function(done) {
    inquirer.prompt([{
        name: 'moduleName',
        message: 'Module Name?',
        default: 'module'
    }], function(answers) {
        gulp.src(__dirname + '/templates/module.js')
            .pipe(template(answers))
            .pipe(rename(answers.moduleName + '.js'))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('gulp', function(done) {
    inquirer.prompt([{
        name: 'moduleName',
        message: 'Module Name?',
        default: 'module'
    }], function(answers) {
        gulp.src([__dirname + '/gulp/**', __dirname + '/gulp/.gitignore'])
            .pipe(template(answers))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .pipe(install())
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('controller', function(done) {
    inquirer.prompt([{
        name: 'moduleName',
        message: 'Module Name?',
        default: 'module'
    }, {
        name: 'controllerName',
        message: 'Controller Name?',
        default: 'controller'
    }], function(answers) {
        gulp.src(__dirname + '/templates/controller.js')
            .pipe(template(answers))
            .pipe(rename(answers.controllerName + '.controller.js'))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('directive', function(done) {
    inquirer.prompt([{
        name: 'moduleName',
        message: 'Module Name?',
        default: 'module'
    }, {
        name: 'directiveName',
        message: 'Directive Name?',
        default: 'directive'
    }], function(answers) {
        gulp.src(__dirname + '/templates/directive.js')
            .pipe(template(answers))
            .pipe(rename(answers.directiveName + '.directive.js'))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('factory', function(done) {
    inquirer.prompt([{
        name: 'moduleName',
        message: 'Module Name?',
        default: 'module'
    }, {
        name: 'factoryName',
        message: 'Factory Name?',
        default: 'factory'
    }], function(answers) {
        gulp.src(__dirname + '/templates/factory.js')
            .pipe(template(answers))
            .pipe(rename(answers.factoryName + '.factory.js'))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('service', function(done) {
    inquirer.prompt([{
        name: 'moduleName',
        message: 'Module Name?',
        default: 'module'
    }, {
        name: 'serviceName',
        message: 'Service Name?',
        default: 'service'
    }], function(answers) {
        gulp.src(__dirname + '/templates/service.js')
            .pipe(template(answers))
            .pipe(rename(answers.serviceName + '.service.js'))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .on('finish', function() {
                done();
            });
    });
});

gulp.task('filter', function(done) {
    inquirer.prompt([{
        name: 'moduleName',
        message: 'Module Name?',
        default: 'module'
    }, {
        name: 'filterName',
        message: 'Filter Name?',
        default: 'filter'
    }], function(answers) {
        gulp.src(__dirname + '/templates/filter.js')
            .pipe(template(answers))
            .pipe(rename(answers.filterName + '.filter.js'))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .on('finish', function() {
                done();
            });
    });
});
