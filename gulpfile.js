const { series, dest } = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const tsProject = ts.createProject('tsconfig.json');

async function clean() {
  await del(['bin/**']);
  return Promise.resolve('Previous files removed.');
}

function build() {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(dest('bin'));
}

function watch(done) {
  const stream = nodemon({
    script: 'bin/main.js',
    ext: 'js',
    ignore: ['bin/', 'node_modules/'],
    watch: ['src'],
    tasks: ['build'],
    done,
  });

  stream
    .on('restart', function () {
      console.log('restarted!');
    })
    .on('crash', function () {
      console.error('Application has crashed!\n');
      stream.emit('restart', 10);
    });
}

exports.watch = series(clean, build, watch);
exports.build = series(clean, build);
