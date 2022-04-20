import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  section: {
    padding: '100px 0',
  },

  header: {
    marginBottom: 80,
  },

  features: {
    marginBottom: 80,
  },

  blockDescription: {
    width: 200,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },

  blockDivider: {
    margin: '12px 0',
  },
}));

export default useStyles;
