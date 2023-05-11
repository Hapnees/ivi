/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
<<<<<<< HEAD
    reactStrictMode: true,
    sassOptions: {
        additionalData: `@import "./src/styles/vars.scss"; @import "./src/styles/index.scss"; @import "./src/styles/ui-kit.scss"; @import "./src/styles/adaptive.scss"; `,
    },
    images: {
        domains: ['thumbs.dfs.ivi.ru'],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'avatars.mds.yandex.net',
                port:'',
            },
            {
                protocol:'https',
                hostname:'www.images.ru',
                port:'',
            },
            {
                protocol:'https',
                hostname:'www.ivi.ru',
                port:'',
            }
        ]
    },
    i18n,
};

module.exports = nextConfig;
=======
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "./src/styles/vars.scss"; @import "./src/styles/index.scss"; @import "./src/styles/ui-kit.scss"; @import "./src/styles/adaptive.scss"; `,
  },
  images: {
    domains: [
      'thumbs.dfs.ivi.ru',
      'avatars.mds.yandex.net',
      'www.images.ru',
      'www.ivi.ru',
    ],
  },
  i18n,
}
module.exports = nextConfig
>>>>>>> 2968c9a251e14f27af4b292c4b4993b67cbe3e6f
