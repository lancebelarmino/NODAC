const theme = {
  colors: {
    white: ['#FFFFFF'],
    gray: ['#F6F7F8', '#9A9A9A'],
    black: ['#0A0A0D', '#000000'],
    blue: ['#1896A4'],
  },

  fontFamily: 'Circle Gordita, sans-serif',

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },

  lineHeight: 1.5,

  headings: {
    fontFamily: 'Circle Gordita, sans-serif',
    fontWeight: 500,
    sizes: {
      h1: { fontSize: 64, lineHeight: 1.375 },
      h2: { fontSize: 48, lineHeight: 1.555 },
      h3: { fontSize: 28, lineHeight: 1.357 },
      h4: { fontSize: 24, lineHeight: 1.166 },
      h5: { fontSize: 20, lineHeight: 1.4 },
      h6: { fontSize: 16, lineHeight: 1.5 },
    },
  },

  breakpoints: {
    xs: 200,
    sm: 768,
    md: 1024,
    lg: 1366,
    xl: 1720,
  },

  other: {
    transitions: {
      all: 'all 200ms ease',
      color: 'color 200ms ease',
      border: 'border 200ms ease',
      background: 'background 200ms ease',
      stroke: 'stroke 200ms ease',
      boxShadow: 'box-shadow 200ms ease',
      filter: 'filter 200ms ease',
    },
  },
};

export default theme;
