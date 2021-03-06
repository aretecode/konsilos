/**
 * @see https://github.com/zeit/now-builders/issues/61 had this issue
 *
 * @description Make sure any symlinks in the project folder are resolved:
 * @see https://github.com/facebookincubator/create-react-app/issues/637
 */
const { resolve, join } = require('path')
const { realpathSync } = require('fs')
const appDirectory = realpathSync(process.cwd())
const resolveApp = relativePath => resolve(appDirectory, relativePath)
const { env } = require('./env')

/**
 * @see https://zeit.co/examples/nextjs/
 * @see https://zeit.co/docs/v2/deployments/ignoring-source-paths
 * @see https://github.com/hanford/next-offline/blob/master/packages/now2-example/next.config.js
 *
 * @see https://nextjs.org/docs#build-time-configuration
 */
const nextConfig = {
  env,
  target:
    process.env.DISABLE_SERVERLESS !== undefined ? 'server' : 'serverless',
  webpack(config, options) {
    if (process.env.NODE_ENV === 'production') {
      console.debug('[next] in production mode, not type checking')
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        providedExports: true,
        concatenateModules: true,
        nodeEnv: 'production',
      }

      return config
    } else if (options.isServer) {
      console.debug('[next] not type checking server')
      return config
    } else {
      console.debug('[next] in development mode, type checking')
    }

    const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
    const plugin = new ForkTsCheckerWebpackPlugin({
      tsconfig: require.resolve('./tsconfig.json'),
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      watch: [resolveApp('src'), resolveApp('pages')],
      reportFiles: [
        // only src, not __tests__
        'src/**/*.{ts,tsx}',
        '!**/__tests__/*',
      ],
    })
    process.env.NODE_ENV !== 'test' && config.plugins.push(plugin)

    return config
  },
  // add the homepage to the cache
  transformManifest: manifest => ['/'].concat(manifest),
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

function withBuildTimeDeps() {
  const withSize = require('next-size')
  const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
  const sizeConfig = withSize(workboxConfig)
  return withBundleAnalyzer({
    ...sizeConfig,
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
  })
}

// process.env.IS_DOCKER === undefined ? withBuildTimeDeps() : wrapperConfig
const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development' ? {} : require('next-server/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {}
  }
  /**
   * @todo might be able to put more of these in build-time only
   * @see https://github.com/zeit/next.js/issues/876
   */
  const withOffline = require('next-offline')
  const workboxConfig = withOffline(nextConfig)
  const testWorkboxConfig = withOffline(nextConfig)
  const wrapperConfig =
    process.env.NODE_ENV !== 'test' ? nextConfig : testWorkboxConfig

  return wrapperConfig
}
