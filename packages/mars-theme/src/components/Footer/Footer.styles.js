import { createStyles } from '@mantine/core';
import footer from '../../assets/images/footer-background.jpg';

const useStyles = createStyles((theme) => ({
  footer: {
    padding: '80px 0',
    background: `url('https://api.nodac.io/wp-content/uploads/2022/04/footer-background-scaled.jpg') no-repeat center center`,
  },

  footerContent: {
    marginBottom: 40,
  },

  header: {
    [theme.fn.smallerThan('sm')]: {
      marginBottom: 40,
    },
  },

  headerDivider: {
    margin: '4px 0 16px 0',
  },

  socials: {
    paddingLeft: 60,

    [theme.fn.smallerThan('sm')]: {
      paddingLeft: 0,
    },
  },

  socialIcon: {
    display: 'grid',
    placeItems: 'center',
    height: 132,
    background: 'rgba(255, 255, 255, 0.6)',
    border: '1px solid #000000',
    transition: theme.other.transitions.boxShadow,

    '&:hover': {
      boxShadow: '8px 8px 0px #000000',
    },
  },

  footerDivider: {
    marginBottom: 24,
  },
}));

export default useStyles;
