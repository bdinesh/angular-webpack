const buildConfig = {
    env: 'dev',
    port: 4000,
    devBaseUrl: 'http://localhost',
    paths: {
        dist: './dist/',
        templates: `${root}/app/**/*.html`,
        scripts: [
            `${root}/app/**/*.js`,
            `!${root}/app/**/*.spec.js`
        ],
        tests: `${root}/app/**/*.spec.js`,
        vendorScripts: [
            'angular/angular.js',
            'angular-cookies/angular-cookies.js',
            'angular-resource/angular-resource.js',
            'angular-aria/angular-aria.js',
            'angular-animate/angular-animate.js',
            'angular-material/angular-material.js',
            'angular-messages/angular-messages.js',
            'angular-ui-router/release/angular-ui-router.js',
            'angular-material-data-table/dist/md-data-table.js',
            'angular-loading-bar/build/loading-bar.js',
            'oidc-client/dist/oidc-client.js',
            'ngstorage/ngStorage.js'
        ],
        styles: [
            `${root}/sass/**/*.{scss,css}`
        ],
        vendorStyles: [
            'angular-material/angular-material.css',
            'angular-loading-bar/build/loading-bar.css',
            'angular-material-data-table/dist/md-data-table.css'
        ],
        static: [
            `${root}/index.html`,
            `${root}/fonts/**/*`,
            `${root}/img/**/*`,
            `${root}/data/**/*`
        ]
    }
};

export { buildConfig };