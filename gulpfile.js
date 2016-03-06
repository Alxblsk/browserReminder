var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserify = require('browserify')
var watchify = require('watchify')
var babel = require('babelify')
var connect = require('gulp-connect')
var stylus = require('gulp-stylus')
var poststylus = require('poststylus')

function compile (watch) {
  var bundler = watchify(browserify('./src/js/init.js', { debug: true }).transform(babel))

  function rebundle () {
    bundler.bundle()
      .on('error', function (err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'))
  }

  if (watch) {
    bundler.on('update', function () {
      console.log('-> bundling...')
      rebundle()
    })
  }

  rebundle()
}

function watch () {
  gulp.watch('./src/**/*.styl', ['stylus']);
  return compile(true)
}

gulp.task('stylus', function () {
  return gulp.src('src/styl/styles.styl').pipe(stylus({
    use: [
      poststylus(['autoprefixer'])
    ]
  }))
    .pipe(gulp.dest('./dist'))

})
gulp.task('build', function () { return compile(); })
gulp.task('watch', function () { return watch(); })
gulp.task('connect', function () {
  connect.server({
    port: 7042
  })
})

gulp.task('default', ['connect', 'watch'])
