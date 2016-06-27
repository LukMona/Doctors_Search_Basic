var gulp = require("gulp");
var sass = require("gulp-sass");
var plugins = require("gulp-load-plugins");

gulp.task("sass", function(){
  return gulp.src("scss/**/*.scss")
  .pipe(sass({
    errLogToConsole: true,
    outputStyle: "expanded"
  }))
  .pipe(gulp.dest("css"));
});

gulp.task("watch", function(){
  gulp.watch("scss/**/*.scss", ["sass"]);
});

gulp.task("bootstrap", function(){
  return gulp.src([
    "node_modules/bootstrap"
  ])
  .pipe(gulp.dest("assets/css"));
});
