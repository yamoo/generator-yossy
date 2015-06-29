var gulp = require('gulp');
var config = require('../config.js');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function() {
    console.log('autoprefixer');
    gulp.src(config.path.tmp + 'css/*.ccss')
        .pipe(autoprefixer({
            browsers: [
              'last 2 versions',
              'Explorer >= 8',
              'Firefox ESR',
              'Android >= 2.3',
              'iOS >= 7'
            ]
        }))
        .pipe(gulp.dest(config.path.tmp + 'csss/'));
});