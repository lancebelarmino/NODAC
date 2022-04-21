import React from 'react';
import { Container, Divider, Title, Text, AspectRatio } from '@mantine/core';
import Section from '../Section/Section';
import WindowCard from '../Card/WindowCard';
import useStyles from './About.styles';

const About = () => {
  const { classes } = useStyles();

  return (
    <Section className={classes.section}>
      <Container size={888}>
        <WindowCard className={classes.card}>
          <AspectRatio ratio={16 / 9}>
            {/* <iframe
              src="https://api.nodac.io/wp-content/uploads/2022/04/NODAC-Promo-Vid.mp4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
            <video controls width="250">
              <source src="https://api.nodac.io/wp-content/uploads/2022/04/NODAC-Promo-Vid.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </AspectRatio>
        </WindowCard>
      </Container>
      <Container className={classes.description} size={700}>
        <Title order={5}>Node aggregator capital (nodac) is the first one-stop nodal management protocol for different high yield node projects.</Title>
        <Divider className={classes.divider} />
        <Text>A Layer 2 Node-as-a-Service Protocol, built on top of different node projects to find the most optimal yield while minimizing risk for investors.</Text>
      </Container>
    </Section>
  );
};

export default About;
