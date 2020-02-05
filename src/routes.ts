// In your routes configuration file
const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/containers/index.tsx`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/containers/404.tsx`)
  }
];