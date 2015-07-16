'use strict';

var config = {
    path: {
        bower: 'bower_components/',
        markups: 'app/',
        styles: 'app/_stylus/',
        scripts: 'app/js/',
        img: 'app/img/',
        sprite: 'app/img/_sprites/',
        svgs: 'app/img/_svgs/',
        tmp: '.tmp/dist/',
        tmpStyles: '.tmp/dist/css/',
        preview: 'preview/',
        dist: 'dist/'
    },

    stylus: {
        watched: 'app/_stylus/*.styl',
        compiled: 'app/_stylus/[^_]*.styl'
    },

    sprite: {
        watched: 'app/img/_sprites/*.png',
        destImg: 'sprite.png',
        destCSS: '_sprite.styl',
        imgPath: '/img/sprite.png',
        cssFormat: 'stylus'
    },

    autoprefixer: {
        browsers: [
          'last 2 versions',
          'Explorer >= 8',
          'Firefox ESR',
          'Android >= 2.3',
          'iOS >= 7'
        ]
    },

    useref: {
        src: ['.tmp/dist/**/*.html'],
        dest: 'dist'
    }
};

module.exports = config;