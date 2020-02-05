<h1 align="center">
    <img alt="Gnonce" title="Gnonce" src="https://github.com/Gnonce/gatsby-starter-gnonce/blob/master/src/images/icon.png" width="200"> </br>
    Gatsby Starter Gnonce
</h1>

<h4 align="center">
  Gatsby + Typescript + Styled Components = 💖
</h4>

<p align="center"><img src="	https://img.shields.io/maintenance/yes/2019.svg"> <a target="_blank" href="https://gatsby-starter-gnonce.netlify.com/"><img src="https://img.shields.io/website-up-down-green-red/https/gatsby-starter-gnonce.netlify.com.svg"></a> <img src="https://img.shields.io/github/package-json/v/gnonce/gatsby-starter-gnonce.svg?color=blue"> <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
</p>

## 👩‍💻 Features

- [x] Google Lighthouse optimized (100/100)
- [x] Search engine optimization
- [x] Social media and meta tags
- [x] One icon favicons
- [x] Manifest support
- [x] Sitemap support
- [x] Offline support
- [x] Easy to use media queries
- [x] Custom routes using separate routing file
- [x] Using Typescript
- [x] Using styled-components
- [x] Using Prettier
- [x] Using tslint


## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

    ```sh
    # create a new Gatsby site using the Gnonce starter
    gatsby new awesome-site https://github.com/gnonce/gatsby-starter-gnonce
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd awesome-site/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `awesome-site` directory in your code editor of choice and edit `src/containers/index.tsx`. Save your changes and the browser will update in real time!

## ⚡️ Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/184bab96-1bf5-41f0-bb14-df00c5e9ec68/deploy-status)](https://app.netlify.com/sites/gatsby-starter-gnonce/deploys)

Get your Gatsby site in 1 min.

Netlify is a unified platform that automates your code to create high-performant, easily maintainable sites and web apps. They provide continuous deployment (Git-triggered builds), an intelligent, global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and a lot more.

<a href="https://www.gatsbyjs.org/docs/deploying-and-hosting/">Read more</a> about deploying your Gatsby site to Netlify or some other provider!

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/gnonce/gatsby-starter-gnonce" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>







## 🛣 Routing

This starter uses [custom routing plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-routes/) to separate routing configurations into external configuration file. Routes are defined in `/src/routes.ts` file by default. Path to external config can be changed in `gatsby-config.js` file.

### Example on how to map component to route using routes.ts
```
// In your routes configuration file (routes.ts)
const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/containers/Home.jsx`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/containers/404.js`)
  }
];
```


## 🤓 What's inside?

```
└── static
    ├── assets
    │   └── thumbnail
└── src
    ├── images
    │   └── icon
    ├── components
    │   ├── Head
    │   ├── Heading
    │   └── Image
    ├── layout
    │   └── index
    ├── containers
    │   ├── index
    │   └── 404
    ├── styles
    │   ├── globalStyles
    │   ├── styleUtils
    │   ├── theme
    │   └── typography
    └── templates

```
