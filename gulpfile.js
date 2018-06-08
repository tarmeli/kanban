/* eslint-disable */
// Plugins
const browserSync = require('browser-sync').create();
const gulp = require('gulp-v4');
const noop = require('gulp-noop');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefix = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');

const path = {
  src: 'scss/',
  assets: 'public/css/',
  node_modules: 'node_modules/',
};

// BrowserSync.
function browserSyncInit() {
  browserSync.init({
    files: [`${path.src}**/*.scss`],
    proxy: 'http://localhost:3000/',
    browser: 'chrome',
  });
}

// Compile SASS.
function compileSASS() {
  return gulp
    .src(`${path.src}**/*.scss`)
    .pipe(sassGlob())
    .pipe(
      path.env === 'development'
        ? sass({
            includePaths: [path.node_modules, './'],
            outputStyle: 'expanded',
          })
        : sass({
            includePaths: [path.node_modules, './'],
            outputStyle: 'compressed',
          }),
    )
    .pipe(
      autoprefix({
        browsers: ['last 2 versions'],
      }),
    )
    .pipe(path.env === 'production' ? cleanCss() : noop())
    .pipe(gulp.dest(path.assets));
}

function runWatch() {
  gulp.watch(`${path.src}**/*.scss`, compileSASS);
}

// Helper function for selecting environment.
function environment(env) {
  console.log(`Running tasks in ${env} mode.`); /* eslint-disable-line */
  path.env = env;
}

// Watch task.
gulp.task('watch', gulp.series(runWatch));

// Build tasks.
gulp.task('dev', gulp.series(compileSASS), done => {
  environment('development');
  done();
});
gulp.task('default', gulp.series('dev', gulp.parallel('watch')), done => {
  done();
});
gulp.task('prod', gulp.series(compileSASS), done => {
  environment('production');
  done();
});
