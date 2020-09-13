import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

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
      nodeResolve({
        main: true,
        extensions: ['.mjs', '.js', '.jsx', '.json', '.vue'],
      }),
      vue(),
      babel({
        exclude: 'node_modules/**'
      }),
    ]
  },
]
