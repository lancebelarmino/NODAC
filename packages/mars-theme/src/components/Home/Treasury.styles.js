import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  section: {
    padding: '80px 0',
  },

  headerTitle: {
    marginBottom: 40,
    textAlign: 'center',
  },

  card: {
    textAlign: 'center',
    background: theme.colors.gray[0],
  },

  cardContent: {
    padding: '32px 0',
  },

  cardHeader: {
    marginBottom: 32,
  },

  cardTimer: {
    margin: '4px 0',
  },

  cardImage: {
    marginBottom: 32,
  },
}));

export default useStyles;
