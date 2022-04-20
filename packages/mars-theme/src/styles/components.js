import theme from './theme';

const componentStyles = {
  Anchor: (theme) => ({
    root: {
      color: theme.colors.black[1],
      transition: theme.other.transitions.color,

      '&:hover': {
        textDecoration: 'none',
      },
    },
  }),

  Title: () => ({
    root: {
      textTransform: 'uppercase',
    },
  }),

  Button: (theme) => ({
    root: {
      borderRadius: 0,
    },

    filled: {
      border: '1px solid #000000',
      background: theme.colors.white[0],
      color: theme.colors.black[1],
      transition: `${theme.other.transitions.boxShadow}, ${theme.other.transitions.background}`,

      '&:hover': {
        background: theme.colors.gray[0],
        boxShadow: '8px 8px 0px #000000',
      },
    },
  }),

  Grid: (theme) => ({
    root: {
      margin: 0,
    },
  }),

  Col: (theme) => ({
    root: {
      padding: 0,
    },
  }),

  Pagination: (theme) => ({
    item: {
      border: `1px solid ${theme.colors.gray[1]}`,
    },

    active: {
      border: `1px solid ${theme.colors.blue[0]}`,
      color: theme.colors.blue[0],
    },
  }),
};

export default componentStyles;
