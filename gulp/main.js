var gulp = require("gulp");
var del = require("del");

module.exports = function() {
    gulp.task("clean", ["style:clean", "javascript:clean"]);
    gulp.task("build", ["style", "javascript"]);
    gulp.task("watch", ["style:watch", "javascript:watch"]);
    gulp.task("dev", ["javascript:dev","style:dev"]);
    gulp.task("dist", ["javascript:dist","style:dist"]);
    gulp.task("default",["dev"]);
};