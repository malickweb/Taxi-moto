var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require("gulp-cssmin");
// var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var cssBeautify = require("gulp-cssbeautify");
var del = require ("del");

module.exports = function() {
    const scss_path = "./sass/**/*.scss";

    gulp.task("style:dist", ["style", "style:clean", "style:cssmin"]);
    gulp.task("style:dev", ["style", "style:clean","style:watch"]);

    gulp.task("style", ["style:clean"], function() {
        return gulp.src(scss_path)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(autoprefixer({
                browsers: ['> 1%', 'IE 9'],
                cascade: false
            }))
            .pipe(cssBeautify({
                indent: '  ',
                openbrace: 'end-of-line'
            }))
            .pipe(gulp.dest('./static/css/'));
    });

    gulp.task("style:cssmin",  function() {
        return gulp.src('./static/css/index.css')
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./static/css/'));
    });

    gulp.task("style:clean", function() {
        return del("./static/css/index.css");
    });

    gulp.task("style:watch", function() {
        return gulp.watch(scss_path, ["style"]);
    });
};