import babel from 'rollup-plugin-babel'
import VuePlugin from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import svg from 'rollup-plugin-vue-inline-svg'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'webUiTheme',
      file: 'dist/web-ui-theme.js',
      format: 'cjs',
    },
    plugins: [
      resolve({
        main: true,
        extensions: ['.mjs', '.js', '.jsx', '.json', '.vue'],
      }),
      VuePlugin(),
      babel({
        exclude: 'node_modules/**'
      }),
      svg()
    ]
  },
]
