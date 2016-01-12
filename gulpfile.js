var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    CONFIG = require('./.gulpfilec');


gulp.task('clean', function (done) {
    var del = require('del');
    del(CONFIG.PATHS.clean, done);
});

gulp.task('tstojs', function () {
    var typescript = require('gulp-typescript'),
        sourcemaps = require('gulp-sourcemaps');
    var tsProject = typescript.createProject('tsconfig.json');
    var tsResult = gulp
        .src(CONFIG.PATHS.src.ts)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject));
        //.pipe(concat('script.js'));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(CONFIG.PATHS.dist.js));
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

gulp.task('view', function () {
    return gulp.src(CONFIG.PATHS.src.view).pipe(gulp.dest(CONFIG.PATHS.dist.view));
});

gulp.task('libs', function () {
    return gulp.src(CONFIG.PATHS.lib).pipe(gulp.dest(CONFIG.PATHS.dist.lib));
});

gulp.task('build', ['libs', 'view', 'html', 'tstojs', 'lesstocss']);

gulp.task('start', ['libs', 'view', 'html', 'tstojs', 'lesstocss'], function () {
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

