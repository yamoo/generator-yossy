'use strict';

var config = {
    path: {
        markups: 'app/',
        styles: 'app/_stylus/',
        img: 'app/img',
        tmp: '.tmp/dist/',
        tmpStyles: '.tmp/dist/css/',
        tmpScript: '.tmp/dist/js/'
    },

    ect: {
        watched: ['app/*.ect', 'app/**/*.ect'],
        compiled: 'app/[^_]*.ect'
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

    usemin: {
        src: ['.tmp/dist/*.html', '.tmp/dist/**/*.html'],
        dest: 'dist'
    }
};

module.exports = config;