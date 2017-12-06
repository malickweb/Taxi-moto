var gulp = require("gulp");
var concat = require("gulp-concat");
var minify = require('gulp-minify');
var del = require("del");
var rename = require("gulp-rename");

module.exports = function() {
    const js_path = "static/js/*.js";
    const js_dest = "static/js/";

    gulp.task("javascript:dist", ["javascript:clean", "javascript:concat", "javascript:minify"]);
    gulp.task("javascript:dev", ["javascript:clean", "javascript:concat", "javascript:copy", "javascript:minify"]);

    gulp.task("javascript:concat", ["javascript:clean"], function() {
        return gulp.src(js_path)
            .pipe(concat("main.js"))
            .pipe(gulp.dest("static/js/"));
    });

    gulp.task("javascript:copy", ["javascript:concat"], function () {
        return gulp.src("static/js/main.js")
            .pipe(rename("main.js"))
            .pipe(gulp.dest(js_dest));
    });

    gulp.task("javascript:minify", ["javascript:concat"], function () {
        return gulp.src("./static/js/main.js")
            .pipe(rename("main.js"))
            .pipe(minify({
                ext: {
                    min: '.min.js'
                }
            }))
            .pipe(gulp.dest(js_dest + 'dist/'));
    });

    gulp.task("javascript:clean", function() {
        return del("static/js/main.js");
    });

    gulp.task("javascript:watch", function() {
        return gulp.watch(js_path, ["javascript:dev"]);
    });
};