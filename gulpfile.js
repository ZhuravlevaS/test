var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var pug = require("gulp-pug");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var server = require("browser-sync").create();


gulp.task("styles", function() {
	gulp.src("./source/sass/style.scss")
		.pipe(plumber()) 
		.pipe(sass())
		.pipe(postcss([
		autoprefixer({browsers: [
			"last 2 versions"
		]})
	]))
		.pipe(gulp.dest("./public"))
		.pipe(server.stream());
});

gulp.task("pages", function() {	
	gulp.src("./source/pages/*.pug")
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest("./public"))
		.pipe(server.stream());
});

gulp.task("images", function() {
	gulp.src("./img/*.jfif")	
		.pipe(gulp.dest("./public/img"))	
});

gulp.task("serve", ["styles", "pages", "images"], function() {
  server.init({
    server: "public",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("./source/**/*.scss", ["styles"]);
  gulp.watch("./source/**/*.pug", ["pages"]).on("change", server.reload);
});

gulp.task("default", ["serve"]);