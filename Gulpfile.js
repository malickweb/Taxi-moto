var gulp = require('gulp');
var wrench = require('wrench');

var options = {
    base: __dirname,
    app: __dirname + '/build'
};

wrench.readdirSyncRecursive('./gulp').map(function(file) {
    require('./gulp/' + file)(options);
});

gulp.task('default', ['dev']);