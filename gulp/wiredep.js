var gulp = require('gulp');
var wiredep = require('wiredep').stream;

var config = require('../config.js');

gulp.task('wiredep', function() {
    console.log('wiredep');

    return gulp.src(config.path.markups + '**/*.ect')
      .pipe(wiredep({
        // ignorePath: /(\.\.\/)*\.\./
      }))
      .pipe(gulp.dest(config.path.markups));
});