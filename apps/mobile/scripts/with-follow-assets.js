/*
 * If you add an asset you need to run `npx expo prebuild`
 * If you rename or delete an asset you need to run `npx expo prebuild --clean` to delete them in your android and ios folder as well.
 *
 * This plugin is inspired by the following plugins:
 * - [expo-custom-assets](https://github.com/Malaa-tech/expo-custom-assets)
 * - [spacedrive](https://github.com/spacedriveapp/spacedrive/blob/main/apps/mobile/scripts/withRiveAssets.js)
 */

const { withDangerousMod, withXcodeProject, IOSConfig } = require("@expo/config-plugins")
const fs = require("node:fs")
const path = require("node:path")
const { execSync } = require("node:child_process")

const IOS_GROUP_NAME = "Assets"

const isAssetReady = (assetsPath) => {
  return fs.existsSync(assetsPath)
}

const withFollowAssets = (config, props) => {
  if (!isAssetReady(props.assetsPath)) {
    const cmd = `pnpm --filter @follow/rn-micro-web-app build --outDir ${path.resolve(props.assetsPath, "html-renderer")}`
    console.info(`Assets source directory not found! Running \`${cmd}\` to generate assets.`)
    execSync(cmd)
  }
  if (!isAssetReady(props.assetsPath)) {
    throw new Error(
      `Assets source directory not found! Please make sure the build is successful. path: ${
        props.assetsPath
      }`,
    )
  }
  const configAfterAndroid = addAndroidResources(config, props)
  const configAfterIos = addIOSResources(configAfterAndroid, props)
  return configAfterIos
}

module.exports = withFollowAssets
