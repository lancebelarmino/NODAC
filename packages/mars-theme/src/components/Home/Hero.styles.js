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
    width: '100%',
    height: 88,
    padding: '0 28px',

    '&:not(:last-child)': {
      marginBottom: 28,
    },
  },

  btnLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },

  btnInfo: {
    textAlign: 'left',
  },

  btnTitle: {
    marginBottom: 4,
  },
}));

export default useStyles;
