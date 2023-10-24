
const { src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();

function serve() {
    browserSync.init({
        server:{
            baseDir: "./build/"
        }
    });
    watch('app/**/*.html', moveHtml).on('change',browserSync.reload);
    watch('app/**/*.scss', styles).on('change',browserSync.reload);
}


exports.serve = serve;

function moveHtml(){
    return src('app/**/*.html')
    .pipe(dest('build/'))
}
exports.moveHtml = moveHtml