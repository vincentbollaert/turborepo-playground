import postcssJitProps from 'postcss-jit-props'
import postcssImport from 'postcss-import'
import OpenProps from 'open-props'

export default {
  plugins: [
    postcssImport(),
    postcssJitProps(OpenProps),
  ],
}
