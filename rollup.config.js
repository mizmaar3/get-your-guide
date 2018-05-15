import buble from 'rollup-plugin-buble';
import commonJS  from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-copy-plugin';
import uglify from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';
import serve from 'rollup-plugin-serve';
import less from 'rollup-plugin-less';

const config = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

export default {
  input: 'src/js/index.js',
  output: {
    name: 'getYourGuide',
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    less({
      output: 'dist/style.css'
    }),
    copy({
      'src/index.html': 'dist/index.html'
    }),
    json({
      exclude: [ 'node_modules/**' ]
    }),
    nodeResolve({
      module: true,
      jsnext: true,
      main: true,
      extensions: ['.js', '.json'],
      preferBuiltins: false
    }),
    commonJS({
      include: 'node_modules/**',
      sourceMap: false
    }),
    buble(),
    serve({
      verbose: true,
      contentBase: 'dist',
      host: 'localhost',
      port: 1984,
    }),
    isProd ? uglify() : []
  ]
};
