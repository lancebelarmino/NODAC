import React from 'react';
import { Container } from '@mantine/core';
import useStyles from './Section.styles';

const Section = ({ children, className }) => {
  const { classes, cx } = useStyles();

  return (
    <section className={cx(classes.section, className)}>
      <Container className={classes.container} size={1352}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
