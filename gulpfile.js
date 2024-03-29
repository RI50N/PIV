var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      open: 'external',
      baseDir: '../',
      middleware: [
        //browserSyncSpa(/^[^\.]+$/, baseDir),

        function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Headers', '*');
          next();
        }
      ]
    },
    startPath: 'PIV/app/'
  });

  gulp.watch([
    'app/**/*.html',
    'app/**/*.js',
    'app/**/*.css'
  ]).on('change', browserSync.reload);
});
