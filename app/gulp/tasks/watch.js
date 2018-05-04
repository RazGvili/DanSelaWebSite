
var
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();


gulp.task('watch', function() {

    browserSync.init({
      server: {
        baseDir: "app"
      },
      notify: false
    });
        
    gulp.task('html', function () {
        browserSync.reload();
        });
  
    watch('./app/assets/styles/**/*.css', function() {
      gulp.start('cssInject');
    });
  
  });

  // inject to css without refresh 
  gulp.task('cssInject', ['styles'] , function() {
    return gulp.src('./app/temp/styles/styels.css')
      .pipe(browserSync.stream());
  });