var angularVersion;
if (window.AngularVersionForThisPlunker === 'latest') {
    angularVersion = ''; //picks up latest
} else {
    angularVersion = '@' + window.AngularVersionForThisPlunker;
}

System.config({
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    paths: {
        'npm:': 'https://unpkg.com/'
    },
    //map tells the System loader where to look for things
    map: {

        'app': './src',
        '@angular/core': 'npm:@angular/core' + angularVersion + '/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common' + angularVersion + '/bundles/common.umd.js',
        '@angular/common/http': 'npm:@angular/common' + angularVersion + '/bundles/common-http.umd.js',
        '@angular/compiler': 'npm:@angular/compiler' + angularVersion + '/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http' + angularVersion + '/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router' + angularVersion + '/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms' + angularVersion + '/bundles/forms.umd.js',
        '@angular/animations': 'npm:@angular/animations' + angularVersion + '/bundles/animations.umd.js',
        '@angular/platform-browser/animations': 'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser-animations.umd.js',
        '@angular/animations/browser': 'npm:@angular/animations' + angularVersion + '/bundles/animations-browser.umd.js',
        'angular2-prettyjson': 'npm:angular2-prettyjson',
        'tslib': 'npm:tslib@1.6.1',
        'rxjs': 'npm:rxjs',
        'typescript': 'npm:typescript@2.2.1/lib/typescript.js'
    },
    //packages defines our app package
    packages: {
        app: {
            main: './main.ts',
            defaultExtension: 'ts'
        },
        rxjs: {
            defaultExtension: 'js'
        },
        'angular2-prettyjson': {
            defaultExtension: 'js',
            main: './index.umd.js'
        }
    }
});