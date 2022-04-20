import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  section: {
    padding: '80px 0',
    background: theme.colors.gray[0],
  },

  header: {
    width: 420,
    margin: '0 auto 40px auto',
    textAlign: 'center',
    wordWrap: 'break-word',
  },

  headerDivider: {
    margin: '4px 0 16px 0',
  },

  tabHeader: {
    marginBottom: 28,
  },

  tabIcon: {
    filter: 'grayscale(1) opacity(0.5)',
    transition: theme.other.transitions.filter,
  },

  activeTabIcon: {
    filter: 'grayscale(0) opacity(1)',
  },

  card: {
    width: 826,
    margin: '0 auto',

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
