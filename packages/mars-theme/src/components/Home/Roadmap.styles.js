import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const timelineImage = getRef('timelineImage');

  return {
    section: {
      padding: '80px 0',
      background: theme.colors.gray[0],
    },

    header: {
      width: 900,
      margin: '0 auto 40px auto',
      textAlign: 'center',

      [theme.fn.smallerThan('md')]: {
        width: '100%',
      },
    },

    headerDivider: {
      margin: '4px 0 16px 0',
    },

    timeline: {
      position: 'relative',
      width: 1120,

      '&::before': {
        content: `''`,
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        height: '100%',
        borderLeft: `1px solid ${theme.colors.blue[0]}`,
      },

      [theme.fn.smallerThan('md')]: {
        width: '100%',

        '&::before': {
          left: '8.5%',
        },
      },
    },

    timelineQuarter: {
      zIndex: 999,
      position: 'relative',
      margin: '0 auto 40px auto',
      maxWidth: 100,
      background: theme.colors.white[0],
      border: `1px solid ${theme.colors.blue[0]}`,
      textAlign: 'center',

      [theme.fn.smallerThan('md')]: {
        margin: '0 0 40px 0',
      },
    },

    timelineItem: {
      zIndex: 999,
      position: 'relative',

      '&:not(:last-child)': {
        marginBottom: 40,
      },

      [`&:nth-of-type(odd) .${timelineImage}::before`]: {
        right: 0,
      },

      [`&:nth-of-type(even) .${timelineImage}::before`]: {
        left: 0,

        [theme.fn.smallerThan('md')]: {
          left: 'unset',
          right: 0,
        },
      },
    },

    timelineItemMobile: {
      [theme.fn.smallerThan('md')]: {
        flexDirection: 'row-reverse',
      },
    },

    timelineIcon: {
      ref: timelineImage,
      position: 'relative',

      '&::before': {
        content: `''`,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'calc(50% - 20px)',
        borderBottom: `1px solid ${theme.colors.gray[1]}`,
      },
    },

    timelineCard: {
      background: theme.colors.white[0],
    },

    timelineContent: {
      padding: 24,
    },

    timelineDivider: {
      margin: '12px 0',
    },

    timelineDescription: {
      '&:not(:last-child)': {
        marginBottom: 8,
      },
    },
  };
});

export default useStyles;
