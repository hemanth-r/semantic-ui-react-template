module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-react-jsx-source',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/transform-runtime',
    '@babel/plugin-transform-object-assign',
  ],
};
