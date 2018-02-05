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
	gulp.src("./img/*")
		.pipe(gulp.dest("./public/img"))
});

gulp.task("fonts", function() {
	gulp.src("./source/font/*")
		.pipe(gulp.dest("./public/font"))
});

gulp.task("script", function () {
	gulp.src("./source/js/*")
		.pipe(gulp.dest("./public/js"))
});

gulp.task("serve", ["fonts", "styles", "pages", "images", "script"], function() {
  server.init({
    server: "public",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("./source/**/*.scss", ["styles"]);
  gulp.watch("./source/**/*.pug", ["pages"]).on("change", server.reload);
	gulp.watch("./source/**/*.js", ["script"]).on("change", server.reload);
});

gulp.task("default", ["serve"]);