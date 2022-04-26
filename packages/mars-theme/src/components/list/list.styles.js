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

  paginationItem: {
    transition: `${theme.other.transitions.border}, ${theme.other.transitions.color}`,

    '& svg path': {
      fill: theme.colors.gray[1],
      transition: theme.other.transitions.stroke,
    },

    '&:hover': {
      color: theme.colors.blue[0],
      borderColor: theme.colors.blue[0],
    },

    '&:hover svg path': {
      fill: theme.colors.blue[0],
    },
  },
}));

export default useStyles;
