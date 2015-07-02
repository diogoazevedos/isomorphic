import gulp from 'gulp'
import webpack from 'webpack'
import minimist from 'minimist'
import childProcess from 'child_process'

import config from './webpack.config.js'
const argv = minimist(process.argv.slice(2))
let watch = false

// Bundle Application
gulp.task('bundle', (callback) => {
  const bundler = webpack(config)

  function bundle(error, stats) {
    if (error) throw new error

    console.log(stats.toString({
      hash: !! argv.verbose,
      colors: true,
      version: !! argv.verbose,
      timings: !! argv.verbose,
      chunks: !! argv.verbose,
      chunkModules: !! argv.verbose,
      cached: !! argv.verbose,
      cachedAssets: !! argv.verbose
    }))

    callback()
  }

  if (watch) {
    bundler.watch(200, bundle)
  } else {
    bundler.run(bundle)
  }
})

// Move Static Files
gulp.task('assets', () => {
  return gulp.src([
      'src/public*/**',
      'src/views*/**'
    ])
    .pipe(gulp.dest('dist'))
})

// Build Application
gulp.task('build', ['bundle', 'assets'])

// Watch Application
gulp.task('watch', ['assets'], () => {
  watch = true
  gulp.watch([
      'src/public*/**',
      'src/views*/**'
    ], ['assets'])
})

// Serve Application
gulp.task('serve', ['bundle', 'assets'], () => {
  let jobs = {}
  Promise.all([
    new Promise((resolve) => {
      let started = false
      jobs.server = (function startup() {
        let child = childProcess.fork('dist/server.js')
          .once('message', (message) => {
            if (message.match(/^online$/) && ! started) {
              started = true
              gulp.watch('dist/server.js', () => {
                jobs.server.kill('SIGTERM')
                jobs.server = startup()
              })
              resolve()
            }
          })
        return child
      })()
    })
  ])
})
