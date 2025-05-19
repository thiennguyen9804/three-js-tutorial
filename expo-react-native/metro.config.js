// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('metro-config');

/** @type {import('expo/metro-config').MetroConfig} */

const defaultConfig = getDefaultConfig(__dirname);

const config = {
    resolver: {
        sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'],
        assetExts: ['glb', 'gltf', 'png', 'jpg'],
    },
}

module.exports = mergeConfig(config, defaultConfig);

