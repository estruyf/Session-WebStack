const gulp = require('gulp'),
      del = require('del'),
      sass = require('gulp-sass'),
      tsc = require('gulp-typescript'),
      browserSync = require('browser-sync').create(),
      server = require('gulp-express');

const tsProject = tsc.createProject("tsconfig.json");


/* SASS Transpile */
gulp.task('sass', () => {
    return gulp.src('./gulp/sass/**/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('./gulp/public/css'))
        .pipe(browserSync.stream());
});


/* TypeScript Transpile */
gulp.task("typescript", () => {
    var tsResult = gulp.src('./gulp/ts/**/*.ts').pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./gulp/public/js/'))
        .pipe(browserSync.stream());
});


/* Watch task */
gulp.task('watch', () => {
    gulp.watch('./gulp/sass/**/*.scss', ['sass']);

    gulp.watch('./gulp/ts/**/*.ts', ['typescript']);
});


/* Serve task - express */
gulp.task('express', () => {
    server.run(['./gulp/app.js']);

    gulp.watch(['./gulp/sass/**/*.html'], server.notify);

    gulp.watch('./gulp/sass/**/*.scss', ['sass']).on('change', browserSync.reload);

    gulp.watch('./gulp/ts/**/*.ts', ['typescript']).on('change', browserSync.reload);
});


/* Serve task */
gulp.task('serve', () => {
    browserSync.init({
        server: "./gulp"
    });

    gulp.watch('./gulp/sass/**/*.scss', ['sass']).on('change', browserSync.reload);

    gulp.watch('./gulp/ts/**/*.ts', ['typescript']).on('change', browserSync.reload);
});


/* Remove all files */
gulp.task('nuke', () => {
    del(['./gulp/public/css/**', './gulp/public/js/**']);
});