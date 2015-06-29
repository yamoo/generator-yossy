var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
    nodemon({
        script: 'gulp/launcher.js',
        nodeArgs: ['--harmony']
    }).on('restart');
});