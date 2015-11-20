'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    gulp.src('./src/css/sass/**/*.sass')
        .pipe(concat('styles.sass'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./theme/crystalnix/static/css'));
});

gulp.task('default', function () {
});