var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    env = require('gulp-env'),
    CONFIG = require('./.gulpfilec');

var PATHS = {
    src: {
        js: 'src/**/*.ts',
        html: 'src/**/*.html',
        css: 'src/**/*.css'
    },
    lib: [
        'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/angular2/bundles/angular2.min.js',
        'node_modules/systemjs/dist/system-csp-production.js'
    ],
    typings: 'node_modules/angular2/bundles/typings/angular2/angular2.d.ts'
};

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('tstojs', function () {
    var typescript = require('gulp-typescript');
    var tsResult = gulp.src(CONFIG.PATHS.src.ts)
        
        .pipe(typescript({
            noImplicitAny: true,
            module: 'system',
            target: 'ES5',
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }));
        //.pipe(concat('script.js'));

        env({
            vars: {
              VP: 'js/'
            }
        });

    return tsResult.pipe(gulp.dest(CONFIG.PATHS.dist.js));
});

gulp.task('html', function () {
    return gulp.src(CONFIG.PATHS.src.html).pipe(gulp.dest(CONFIG.APP_DIST));
});


gulp.task('lesstocss', function () {

    var less = require('gulp-less');

    var lessCssResult = gulp.src(CONFIG.PATHS.src.less)
        .pipe(concat('style.less'))
        .pipe(gulp.dest(CONFIG.PATHS.dist.less))
        .pipe(less())
        .pipe(gulp.dest(CONFIG.PATHS.dist.css))
        .pipe(less({
            compress: true
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(CONFIG.PATHS.dist.css));

    return lessCssResult;
});

gulp.task('libs', function () {
    return gulp.src(PATHS.lib).pipe(gulp.dest('dist/js/lib'));
});

gulp.task('start', ['libs', 'html', 'tstojs', 'lesstocss'], function () {
    var http = require('http'),
        connect = require('connect'),
        serveStatic = require('serve-static'),
        open = require('open');

    var port = 9000, app;

    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(CONFIG.PATHS.src.ts, ['tstojs']);
    gulp.watch(PATHS.src.css, ['css']);

    app = connect().use(serveStatic(__dirname + '/dist'));  // serve everything that is static
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

