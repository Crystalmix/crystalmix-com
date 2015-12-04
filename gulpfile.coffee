gulp                = require 'gulp'
sass                = require 'gulp-sass'
coffee              = require 'gulp-coffee'
gutil               = require 'gulp-util'
uglify              = require 'gulp-uglify'
rename              = require 'gulp-rename'
lintspaces          = require 'gulp-lintspaces'
coffeelint          = require 'gulp-coffeelint'
concat              = require 'gulp-concat'
main_bower_files    = require 'gulp-main-bower-files'

path =
    js     : './output/theme/js'
    coffee : './theme/crystalnix/src/coffee'
    css    : './output/theme/css'
    sass   : './theme/crystalnix/src/sass'
    lib_out: './output/theme/lib'

name =
    js     : 'crystalnix'
    js_min : 'crystalnix.min'
    css    : 'styles'

options =
    lintspaces:
        newline: yes
        newlineMaximum: 2
        indentation: "spaces"
        spaces: 4


# Tasks for coffee and sass compile and minify

gulp.task 'coffeelint', () ->
    gulp.src("#{path.coffee}/**/*.coffee")
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())


gulp.task 'lintspaces', () ->
    gulp.src("#{path.sass}/**/*.sass")
        .pipe(lintspaces(options.lintspaces))
        .pipe(lintspaces.reporter()).on("error", gutil.log)


gulp.task 'uglify', () ->
    gulp.src("#{path.js}/#{name.js}.js")
        .pipe(uglify())
        .pipe(rename("#{name.js_min}.js"))
        .pipe(gulp.dest(path.js))


gulp.task 'sass', ['lintspaces'],() ->
    gulp.src("#{path.sass}/**/*.sass")
        .pipe(concat("#{name.css}.sass"))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.css))


gulp.task 'coffee', ['coffeelint'], () ->

    gulp.src("#{path.coffee}/**/*.coffee")
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest(path.js))


gulp.task 'coffee-uglify', ['coffeelint'], () ->
    gulp.src("#{path.coffee}/**/*.coffee")
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.js))


# Task for copy all bower dependencies (js and css) in output directory

libs_main_files =
    overrides:
        'angular':
            'main': [
                'angular.min.js'
                'angular.min.js.map'
            ]
        'bootstrap':
            'main': [
                'dist/css/bootstrap.min.css'
                'dist/css/bootstrap.min.css.map'
                'dist/js/bootstrap.min.js'
            ]
        'html5shiv':
            'main': [
                'dist/html5shiv.min.js'
            ]
        'jquery':
            'main': [
                'dist/jquery.min.js'
                'dist/jquery.min.js.map'
            ]
        'respond':
            'main': [
                'dest/respond.min.js'
            ]
        'slick-carousel':
            'main': [
                'slick/slick.min.js'
                'slick/slick.css'
            ]

bower_json = './bower.json'

gulp.task 'main-bower-files', () ->
    gulp.src(bower_json)
        .pipe(main_bower_files(libs_main_files))
        .pipe(gulp.dest(path.lib_out))
