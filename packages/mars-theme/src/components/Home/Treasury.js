import React from 'react';
import { Title, SimpleGrid, Container, Image, Text } from '@mantine/core';
import Section from '../Section/Section';
import WindowCard from '../Card/WindowCard';
import eth from '../../assets/images/treasury-eth.png';
import avax from '../../assets/images/treasury-avax.png';
import ftm from '../../assets/images/treasury-ftm.png';
import useStyles from './Treasury.styles';

const Treasury = () => {
  const { classes } = useStyles();
  return (
    <Section className={classes.section}>
      <Title className={classes.headerTitle} order={1}>
        Our Treasury
      </Title>

      <Container size={1180}>
        <SimpleGrid cols={3} spacing={40} breakpoints={[{ maxWidth: 1024, cols: 1, spacing: 60 }]}>
          <WindowCard className={classes.card}>
            <div className={classes.cardContent}>
              <div className={classes.cardHeader}>
                <Text>Next Node Rewards Distribution Snapshot</Text>
                <Title className={classes.cardTimer} order={3}>
                  00:00:00
                </Title>
                <Text>None Yet: Still at Initial Phase</Text>
              </div>
              <Image className={classes.cardImage} src={eth} height={140} fit="contain" />
              <div>
                <Title order={5}>89 $Strong Nodes</Title>
              </div>
            </div>
          </WindowCard>
          <WindowCard className={classes.card}>
            <div className={classes.cardContent}>
              <div className={classes.cardHeader}>
                <Text>Next Node Rewards Distribution Snapshot</Text>
                <Title className={classes.cardTimer} order={3}>
                  00:00:00
                </Title>
                <Text>March 3, 2021 at 3pm UTC</Text>
              </div>
              <Image className={classes.cardImage} src={avax} height={140} fit="contain" />
              <div>
                <Title order={5}>49 $thor Nodes</Title>
                <Title order={5}>100 $milk Nodes</Title>
                <Title order={5}>57 $playmates Nodes</Title>
              </div>
            </div>
          </WindowCard>
          <WindowCard className={classes.card}>
            <div className={classes.cardContent}>
              <div className={classes.cardHeader}>
                <Text>Next Node Rewards Distribution Snapshot</Text>
                <Title className={classes.cardTimer} order={3}>
                  00:00:00
                </Title>
                <Text>March 3, 2021 at 3pm UTC</Text>
              </div>
              <Image className={classes.cardImage} src={ftm} height={140} fit="contain" />
              <div>
                <Title order={5}>97 $power Nodes</Title>
              </div>
            </div>
          </WindowCard>
        </SimpleGrid>
      </Container>
    </Section>
  );
};

export default Treasury;
