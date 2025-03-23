const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname)
// 1. Watch all files in the project directory
config.watchFolders = [path.resolve(__dirname)];

// 2. Configure resolver to understand aliases
config.resolver.extraNodeModules = {
  '@': path.resolve(__dirname),
};


module.exports = withNativeWind(config, { input: './global.css' })