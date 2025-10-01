const path = require('path');

module.exports = {
  // Режим сборки
  mode: 'development', // или 'production'
  
  // Точка входа
  entry: './js/script.js',
  
  // Выходной файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очищает папку dist перед каждой сборкой
  },
  
  // // Загрузчики (loaders)
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: ['style-loader', 'css-loader'],
  //     },
  //     {
  //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
  //       type: 'asset/resource',
  //     },
  //   ],
  // },
};