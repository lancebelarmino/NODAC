export const spinnerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

export const contentVariant = {
  hidden: {
    opacity: 0,
    y: 4,
  },

  visible: (i) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.2,
        delay: i * 0.05,
      },
    };
  },

  exit: (i) => {
    return {
      y: -4,
      opacity: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.2,
        delay: i * 0.05,
      },
    };
  },
};

export const sectionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

export const sliderVariant = {
  hidden: (direction) => {
    console.log(direction);
    return {
      x: direction > 0 ? 150 : -150,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2, bounce: 0 },
  },
  exit: (direction) => {
    console.log(direction);
    return {
      x: direction < 0 ? -150 : 150,
      opacity: 0,
      transition: { duration: 0.4 },
    };
  },
};
