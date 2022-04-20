import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  section: {
    padding: '100px 0',
  },

  header: {
    margin: '0 auto 40px auto',
    textAlign: 'center',
  },

  posts: {
    marginBottom: 32,
  },

  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
