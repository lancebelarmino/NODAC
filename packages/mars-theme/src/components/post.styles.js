import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  section: {
    height: 'auto',
    padding: '200px 0 80px 0',
  },

  title: {
    marginBottom: 20,
  },

  header: {
    marginBottom: 40,
  },

  featuredImage: {
    width: '100%',
    marginBottom: 80,
  },

  otherPosts: {
    padding: '100px 0',
  },

  otherPostsTitle: {
    textAlign: 'center',
    marginBottom: 40,
  },

  otherPostsIcon: {
    marginBottom: 24,
  },

  otherPostsNotification: {
    textAlign: 'center',
  },
}));

export default useStyles;
