var gulp = require('gulp')  
var webserver = require('gulp-webserver') 
var source = require('vinyl-source-stream') 


gulp.task('server', function() {  
  gulp.src('')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})



gulp.task('default', ['server'])  