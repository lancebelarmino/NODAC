import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  section: {
    padding: '80px 0',
    background: theme.colors.gray[0],
  },

  header: {
    margin: '0 auto 40px auto',
    textAlign: 'center',
  },

  team: {
    marginBottom: 32,
  },

  card: {
    background: theme.colors.white[0],
  },

  cardContent: {
    padding: 28,
  },

  cardAvatar: {
    marginBottom: 28,
  },

  cardDivider: {
    margin: '12px 0',
  },

  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  paginationItem: {
    '&:not(:first-of-type):not(:last-of-type)': {
      display: 'none',
    },
  },
}));

export default useStyles;
