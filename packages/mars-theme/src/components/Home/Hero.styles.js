import { createStyles } from '@mantine/core';
import hero from '../../assets/images/hero-background.jpg';

const useStyles = createStyles((theme) => ({
  hero: {
    height: 'auto',
    padding: '200px 0 80px 0',
    background: `url('https://api.nodac.io/wp-content/uploads/2022/04/hero-background-scaled.jpg') no-repeat center center`,
  },

  heroImage: {
    placeSelf: 'center',
  },

  heroTitle: {
    marginBottom: 40,
  },

  btn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    padding: '16px 28px',
    border: '1px solid #000000',
    background: theme.colors.white[0],
    color: theme.colors.black[1],
    transition: `${theme.other.transitions.boxShadow}, ${theme.other.transitions.background}`,

    '&:hover': {
      background: theme.colors.gray[0],
      boxShadow: '8px 8px 0px #000000',
    },

    '&:not(:last-child)': {
      marginBottom: 28,
    },
  },

  // btnLabel: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   width: '100%',
  // },

  btnInfo: {
    textAlign: 'left',
  },

  btnTitle: {
    marginBottom: 4,
  },
}));

export default useStyles;
