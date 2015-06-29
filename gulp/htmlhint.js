var gulp = require('gulp');
var config = require('../config.js');
var htmlhint = require('gulp-htmlhint');

gulp.task('htmlhint', function() {
    console.log('htmlhint');
    gulp.src(config.path.tmp + '*.html')
      .pipe(htmlhint())
      .pipe(htmlhint.reporter());
});