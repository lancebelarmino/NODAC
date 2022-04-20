const settings = {
  name: 'nodac',
  state: {
    frontity: {
      url: 'https://nodac.io',
      title: 'NODAC',
      description: 'NODE Aggregator Captial',
    },
  },
  packages: [
    {
      name: '@frontity/mars-theme',
      state: {
        theme: {
          menu: [
            ['Home', '/'],
            ['Nature', '/category/nature/'],
            ['Travel', '/category/travel/'],
            ['Japan', '/tag/japan/'],
            ['About Us', '/about-us/'],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          url: 'https://api.nodac.io/',
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
  ],
};

export default settings;
