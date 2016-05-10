module.exports = {
  entry: {
    ClassDashboard: './ClassDashboard.js',
    ScratchDisplays: './ScratchDisplays.js'
    // ScreensharePage: './ScreensharePage.js' 
  },
  output: {
     path: 'build',
     filename: '[name].js' // Template based on keys in entry above
  },
  module: {
    loaders: [      
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']    
  }
};