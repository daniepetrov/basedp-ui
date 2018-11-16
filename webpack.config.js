const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules | build)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              name: '[name][md5:hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'StyledComponents',
      root: 'StyledComponents',
    },
    'styled-system': {
      commonjs: 'styled-system',
      commonjs2: 'styled-system',
      amd: 'StyledSystem',
      root: 'StyledSystem',
    },
    LandingContext: {
      commonjs: 'LandingContext',
      commonjs2: 'LandingContext',
      amd: 'LandingContext',
      root: 'LandingContext',
    },
  },
}
