module.exports = (function () {
    'use strict';

    return {
        options: {
            files: ['package.json'],
            updateConfigs: [],
            commit: true,
            commitMessage: 'SCR: NA - Release v%VERSION%',
            commitFiles: ['package.json'],
            createTag: true,
            tagName: 'v%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'origin',
            gitDescribeOptions: '--tags --always'
        }
    };
})();

