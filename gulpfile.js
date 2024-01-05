const gulp = require('gulp');
const concat = require('gulp-concat')
const scss = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify-es').default;
const clean = require('gulp-clean');
const htmlMin = require('gulp-htmlmin')

gulp.task('minScripts', () => {
    return gulp.src([
        './node_modules/@splidejs/splide/dist/js/splide.js',
        './js/petFoodies.js',
        './js/petFood.js',
        './js/main.js',
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
})
gulp.task('minScss', () => {
    return gulp.src('./css/main.scss')
        .pipe(concat('main.min.css'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./css'))
})
gulp.task('minHTML', () =>{
    return gulp.src('./app/index.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))
})
gulp.task('cleanDist', () => {
    return gulp.src('dist')
        .pipe(clean())
})

