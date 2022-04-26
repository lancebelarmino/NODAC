import regular from '../assets/fonts/CicleGordita-Regular.woff2';

const global = (theme) => [
  {
    '@font-face': {
      fontFamily: 'Circle Gordita',
      src: `url('${regular}') format("woff2")`,
      fontWeight: 400,
      fontStyle: 'normal',
    },
  },
  {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
  },
  {
    body: {
      fontFamily: theme.fontFamily,
      overflowX: 'hidden',
    },
  },
];

export default global;
