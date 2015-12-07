gulp                = require 'gulp'
sass                = require 'gulp-sass'
coffee              = require 'gulp-coffee'
gutil               = require 'gulp-util'
uglify              = require 'gulp-uglify'
rename              = require 'gulp-rename'
lintspaces          = require 'gulp-lintspaces'
coffeelint          = require 'gulp-coffeelint'
concat              = require 'gulp-concat'
cmq                 = require 'gulp-combine-media-queries'
minifycss           = require 'gulp-minify-css'

path =
    js          : './output/theme/js'
    coffee      : './theme/crystalnix/src/coffee'
    css         : './output/theme/css'
    sass        : './theme/crystalnix/src/sass'

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
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.js))


gulp.task 'sass', ['lintspaces'],() ->
    gulp.src("#{path.sass}/**/*.sass")
        .pipe(concat("#{name.css}.sass"))
        .pipe(sass().on('error', sass.logError))
        .pipe(cmq(log: true))
        .pipe(minifycss({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
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
