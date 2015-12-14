var jshint    = require('gulp-jshint'),
  bower       = require('gulp-bower'),
  taskListing = require('gulp-task-listing'),
  gulp        = require('gulp');

gulp.task('bower', function() {
  return bower();
});

gulp.task('lint', function() {
  return gulp.src([
    './frontend/*.js',
    './frontend/controllers/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('help', taskListing.withFilters(null, 'default'));

gulp.task('default', ['lint', 'bower']);
