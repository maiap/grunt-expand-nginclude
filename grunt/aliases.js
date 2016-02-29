module.exports = function (grunt, options) {
    'use strict';

    //console.log(grunt);
    return {
        'default': ['check'],
        test: ['mocha_istanbul'],
        check: ['eslint', 'mocha_istanbul']
        //release: ['bump']
    }
};