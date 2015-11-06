'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    gulp.src('./styles/sass/**/*.sass')
        .pipe(concat('styles.sass'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css'));
});

gulp.task('default', function () {
});