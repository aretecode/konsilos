const { resolve } = require('path')

module.exports = baseConfig => {
  const config = baseConfig.config

  /**
   * these rules make storybook slow, so they are removed
   */
  if (process.env.NODE_ENV === 'development') {
    config.module.rules = config.module.rules.filter(loader => {
      if (
        Array.isArray(loader.include) &&
        loader.include.some(
          x => typeof x === 'string' && x.includes('.storybook')
        )
      ) {
        return false
      } else if (
        Array.isArray(loader.use) === false ||
        loader.use.length === 0
      ) {
        return true
      } else if (
        (Array.isArray(loader.use[0].plugins) &&
          (loader.use[0].plugins.some(x => Array.isArray(x)) === true ||
            // remove dupe babel
            loader.use[0].plugins.includes('@babel/plugin-syntax-jsx'))) ||
        JSON.stringify(loader).includes('DOC_GEN_COLLECTION_NAME')
      ) {
        console.warn('removed storybook babel')
        return false
      } else if (
        loader.use.some(x => x.options && !!x.options.indent) ||
        JSON.stringify(loader).includes('postcss')
      ) {
        // remove postcss
        return false
      } else {
        return true
      }
    })
  }

  /**
   * @see https://www.styled-components.com/docs/tooling#babel-plugin
   */
  config.module.rules.unshift({
    test: /\.(tsx?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                ssr: true,
                pure: true,
                displayName: true,
                minify: true,
              },
            ],
          ],
          cacheDirectory: false,
        },
      },

      {
        loader: require.resolve('ts-loader'),
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  })

  if (process.env.NODE_ENV === 'development') {
    const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
    const plugin = new ForkTsCheckerWebpackPlugin({
      // async: false,
      tsconfig: require.resolve('../tsconfig.json'),
      tslint: require.resolve('../tslint.json'),
      measureCompilationTime: true,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
    })
    config.plugins.push(plugin)
  } else {
    config.output = {
      ...config.output,
      publicPath: '/ui',
    }
  }
  config.node = {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  }

  // config.resolve.alias = {}
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
