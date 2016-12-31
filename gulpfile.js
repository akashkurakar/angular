// 'use strict';


// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var debug = require('gulp-debug');
// var inject = require('gulp-inject');
// var tsc = require('gulp-typescript');
// var tslint = require('gulp-tslint');
// var sourcemaps = require('gulp-sourcemaps');
// var del = require('del');
// var Config = require('./gulpfile.config');
// var tsProject = tsc.createProject('tsconfig.json');
// var browserSync = require('browser-sync');
// var superstatic = require('superstatic');


// var config = new Config();


// /** 
//  * Generates the app.d.ts references file dynamically from all application *.ts files. 
//  */
// // gulp.task('gen-ts-refs', function () { 
// //     var target = gulp.src(config.appTypeScriptReferences); 
// //     var sources = gulp.src([config.allTypeScript], {read: false}); 
// //     return target.pipe(inject(sources, { 
// //         starttag: '//{', 
// //         endtag: '//}', 
// //         transform: function (filepath) { 
// //             return '/// <reference path="../..' + filepath + '" />'; 
// //         } 
// //     })).pipe(gulp.dest(config.typings)); 
// // }); 


// /** 
// * Lint all custom TypeScript files. 
//  */
// gulp.task('ts-lint', function () {
//   return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
// });


// /** 
//  * Compile TypeScript and include references to library and app .d.ts files. 
//  */
// gulp.task('compile-ts', function () {
//   var sourceTsFiles = [config.allTypeScript,                //path to typescript files 
//   config.libraryTypeScriptDefinitions]; //reference to library .d.ts files 



//   var tsResult = gulp.src(sourceTsFiles)
//     .pipe(sourcemaps.init())
//     .pipe(tsc(tsProject));


//   tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
//   return tsResult.js
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest(config.tsOutputPath));
//     console.log("akash");
// });


// /** 
//  * Remove all generated JavaScript files from TypeScript compilation. 
//  */
// gulp.task('clean-ts', function (cb) {
//   var typeScriptGenFiles = [
//     config.tsOutputPath + '/**/*.js',    // path to all JS files auto gen'd by editor 
//     config.tsOutputPath + '/**/*.js.map', // path to all sourcemap files auto gen'd by editor 
//     '!' + config.tsOutputPath + '/lib'
//   ];

//   // delete the files 
//   del(typeScriptGenFiles, cb);
// });


// gulp.task('watch', function () {
//   gulp.watch([config.allTypeScript], ['ts-lint', 'compile-ts']);
// });

// //gulp.task('default', ['dev']);

// gulp.task('serve', ['compile-ts', 'watch'], function () {
//   process.stdout.write('Starting browserSync and superstatic...\n');
//   browserSync({
//     port: 3000,
//     files: ['index.html', '**/*.js'],
//     injectChanges: true,
//     logFileChanges: false,
//     logLevel: 'silent',
//     logPrefix: 'angularin20typescript',
//     notify: true,
//     reloadDelay: 0,
//     server: {
//       baseDir: './src',
//       middleware: superstatic({ debug: false })
//     }
//   });
// });

// gulp.task('default',['dev']);
// gulp.task('dev', ['ts-lint', 'compile-ts', 'sass','serve']);

'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json'),
    browserSync = require('browser-sync'),
    superstatic = require( 'superstatic' );

var config = new Config();

/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
// gulp.task('gen-ts-refs', function () {
//     var target = gulp.src(config.appTypeScriptReferences);
//     var sources = gulp.src([config.allTypeScript], {read: false});
//     return target.pipe(inject(sources, {
//         starttag: '//{',
//         endtag: '//}',
//         transform: function (filepath) {
//             return '/// <reference path="../..' + filepath + '" />';
//         }
//     })).pipe(gulp.dest(config.typings));
// });

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json'),
    browserSync = require('browser-sync'),
    superstatic = require( 'superstatic' );

var config = new Config();

/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
// gulp.task('gen-ts-refs', function () {
//     var target = gulp.src(config.appTypeScriptReferences);
//     var sources = gulp.src([config.allTypeScript], {read: false});
//     return target.pipe(inject(sources, {
//         starttag: '//{',
//         endtag: '//}',
//         transform: function (filepath) {
//             return '/// <reference path="../..' + filepath + '" />';
//         }
//     })).pipe(gulp.dest(config.typings));
// });

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

gulp.task('sass', function () {
  
    
  return gulp.src('./src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
                         config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
                        

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

        tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest('./dist'));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function (cb) {
  var typeScriptGenFiles = [
                              config.tsOutputPath +'/**/*.js',    // path to all JS files auto gen'd by editor
                              config.tsOutputPath +'/**/*.js.map', // path to all sourcemap files auto gen'd by editor
                              '!' + config.tsOutputPath + '/lib'
                           ];

  // delete the files
  del(typeScriptGenFiles, cb);
});

gulp.task('watch', function() {
    gulp.watch([config.allTypeScript], ['ts-lint', 'compile-ts']);
});

gulp.task('serve', ['compile-ts', 'watch'], function() {
  process.stdout.write('Starting browserSync and superstatic...\n');
  browserSync({
    port: 3000,
    files: ['index.html', '**/*.js'],
    injectChanges: true,
    logFileChanges: false,
    logLevel: 'silent',
    logPrefix: 'angularin20typescript',
    notify: true,
    reloadDelay: 0,
    server: {
      baseDir: './src',
      middleware: superstatic({ debug: false})
    }
  });
});

gulp.task('default',['dev']);
gulp.task('dev', ['ts-lint', 'compile-ts', 'sass']);
