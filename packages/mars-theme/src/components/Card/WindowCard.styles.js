import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    border: `1px solid ${theme.colors.gray[1]}`,
  },

  controls: {
    padding: 4,
    textAlign: 'right',
    borderBottom: `1px solid ${theme.colors.gray[1]}`,
  },
}));

export default useStyles;
