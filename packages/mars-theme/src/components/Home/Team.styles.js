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

  paginationBtn: {
    '& svg circle': {
      stroke: theme.colors.gray[1],
      transition: theme.other.transitions.stroke,
    },

    '& svg path': {
      fill: theme.colors.gray[1],
      transition: theme.other.transitions.stroke,
    },

    '&:hover svg circle': {
      stroke: theme.colors.blue[0],
    },

    '&:hover svg path': {
      fill: theme.colors.blue[0],
    },

    '&:disabled': {
      opacity: 0.6,
      filter: 'grayscale(1)',
      cursor: 'not-allowed',
    },

    '&:not(:last-of-type)': {
      marginRight: 12,
    },
  },
}));

export default useStyles;
