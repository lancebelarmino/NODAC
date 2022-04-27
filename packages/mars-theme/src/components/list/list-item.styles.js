import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: 520,
  },

  content: {
    height: '100%',
    padding: '24px 24px 60px 24px',
  },

  media: {
    marginBottom: 20,
    width: '100%',
  },

  title: {
    marginBottom: 12,
  },

  footer: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    width: 'calc(100% - 48px)',
  },

  btn: {
    textTransform: 'uppercase',
  },
}));

export default useStyles;
