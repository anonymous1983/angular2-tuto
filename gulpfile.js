var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    CONFIG = require('./.gulpfilec');

gulp.task('clean', function (done) {
    var del = require('del');
    del(CONFIG.PATHS.clean, done);
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

    return tsResult.pipe(gulp.dest(CONFIG.PATHS.dist.js));
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

gulp.task('html', function () {
    return gulp.src(CONFIG.PATHS.src.html).pipe(gulp.dest(CONFIG.APP_DIST));
});

gulp.task('libs', function () {
    return gulp.src(CONFIG.PATHS.lib).pipe(gulp.dest(CONFIG.PATHS.dist.lib));
});

gulp.task('build', ['libs', 'html', 'tstojs', 'lesstocss']);

gulp.task('start', ['libs', 'html', 'tstojs', 'lesstocss'], function () {
    var http = require('http'),
        connect = require('connect'),
        serveStatic = require('serve-static'),
        open = require('open');

    var port = 9000, app;

    gulp.watch(CONFIG.PATHS.src.html, ['html']);
    gulp.watch(CONFIG.PATHS.src.ts, ['tstojs']);
    gulp.watch(CONFIG.PATHS.src.less, ['lesstocss']);

    app = connect().use(serveStatic(__dirname + CONFIG.APP_BASE + CONFIG.APP_DIST));  // serve everything that is static
    http.createServer(app).listen(CONFIG.PORT, function () {
        open( CONFIG.APP_HOST + ':' + CONFIG.PORT, CONFIG.APP_BROWSER);
    });
});

