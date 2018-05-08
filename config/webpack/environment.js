const { environment } = require('@rails/webpacker')

const merge = require('webpack-merge')
const path = require('path');
const webpack = require('webpack');

environment.plugins.prepend('Provide',  
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    Headroom: 'headroom'

  })
)

const SassLoader = environment.loaders.find(el => el.key === 'sass').value.use.find(el => el.loader == 'sass-loader')

const variables = {
  data: '@import "reset.scss"; @import "mixins.scss"; @import "colors.scss"; @import "type.scss";',
  includePaths: [ path.resolve(__dirname, "../../vendor/frontend/base/"), path.resolve(__dirname, "../../frontend/company/")]
}

const config = environment.toWebpackConfig()

config.resolve.alias = {
  jquery: "jquery/src/jquery",
  headroom: "headroom.js/dist/headroom"
}


SassLoader.options = merge(SassLoader.options, variables)

module.exports = config
