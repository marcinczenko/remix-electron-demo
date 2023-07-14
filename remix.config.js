/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    v2_meta: true,
    v2_headers: true
  },
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildPath: 'desktop/build/index.js',
  serverModuleFormat: 'cjs',
  devServerPort: 8002
}
