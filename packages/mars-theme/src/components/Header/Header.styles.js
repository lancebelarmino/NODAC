import { createStyles, Grid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    zIndex: 9999,
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    paddingTop: 28,
    backgroundColor: 'transparent',
    transition: theme.other.transitions.background,
  },

  stickyHeader: {
    backgroundColor: theme.colors.white[0],
  },

  nav: {
    position: 'relative',
  },

  link: {
    textTransform: 'uppercase',
  },

  mobileLinks: {
    position: 'fixed',
    top: 121,
    left: 0,
    background: theme.colors.white[0],
    width: '100%',
    padding: '40px 28px',
    boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.08)',

    '& a': {
      width: '100%',
      padding: 24,
    },

    '& a:hover': {
      background: theme.colors.gray[0],
    },
  },

  linkBtn: {
    padding: '8px 16px',
    background: theme.colors.white[0],
    border: '1px solid black',
    transition: `${theme.other.transitions.boxShadow}, ${theme.other.transitions.background}`,

    '&:hover': {
      background: theme.colors.gray[0],
      boxShadow: '8px 8px 0px #000000',
    },
  },

  divider: {
    marginTop: 20,
  },

  burger: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
  },
}));

export default useStyles;
