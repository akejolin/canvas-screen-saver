module.exports = {
  extends: "@snowpack/app-scripts-react",
  mount: {
    public: "/",
    src: "/site-modules"
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      { "cmd": "tsc --noEmit", "watch": "$1 --watch" }
    ],
    "snowpack-plugin-sass",
    ["snowpack-plugin-content-hash", {
      exts: [".js", ".jsx"]
    }],
    ["snowpack-plugin-baseurl-handler", {
      exts: [".html", ".js", ".jsx", ".css", ".scss"],
      baseUrl: '/canvas-screen-saver',
    }]
  ],
  installOptions: {
    "installTypes": true
  },
  buildOptions: {
    metaDir: 'metadata',
    minify: true,
  },
  alias: {
    "@src" : './src'
  }
}
