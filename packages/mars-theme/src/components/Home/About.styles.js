import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  section: {
    padding: '80px 0',
    background: theme.colors.gray[0],
  },

  card: {
    height: 400,
    marginBottom: 40,
  },

  description: {
    textAlign: 'center',
  },

  divider: {
    margin: '12px 0',
  },
}));

export default useStyles;
