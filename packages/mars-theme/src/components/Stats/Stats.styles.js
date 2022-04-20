import { createStyles, Grid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  statsCol: {
    padding: '20px 0',
    textAlign: 'center',
  },

  statsColData: {
    placeSelf: 'center',
  },

  statsIcon: {
    marginBottom: 20,

    '& img': {
      [theme.fn.smallerThan('md')]: {
        height: '40px !important',
      },
    },

    [theme.fn.smallerThan('md')]: {
      marginBottom: 12,
    },
  },

  statsTitle: {
    lineHeight: 1.4,

    [theme.fn.smallerThan('md')]: {
      fontSize: 16,
    },
  },

  statsDivider: {
    borderColor: theme.colors.gray[1],
  },
}));

export default useStyles;
