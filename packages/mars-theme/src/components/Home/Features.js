import React from 'react';
import { Container, Group, Title, Text, SimpleGrid, Divider, Image } from '@mantine/core';
import Section from '../Section/Section';
import reward from '../../assets/images/features-reward.png';
import danger from '../../assets/images/features-danger.png';
import multichain from '../../assets/images/features-multichain.png';

import useStyles from './Features.styles';

const blockData = [
  { icon: danger, title: 'Hyper-deflationary Tokenomics', description: 'You can sell $NODAC anytime. No lock ups.' },
  { icon: multichain, title: 'Multichain', description: 'Available in 3 Networks - Ethereum, Avalanche, Fantom. Multichain Bridge soon.' },
];

const Features = () => {
  const { classes } = useStyles();

  const blocks = blockData.map((item) => (
    <Group key={item.title} align="flex-start" noWrap>
      <div className={classes.blockIcon}>
        <Image src={item.icon} width={68} />
      </div>

      <div className={classes.blockDescription}>
        <Title order={6}>{item.title}</Title>
        <Divider className={classes.blockDivider} />
        <Text size="md">{item.description}</Text>
      </div>
    </Group>
  ));

  return (
    <Section className={classes.section}>
      <Container size={1240}>
        <Group className={classes.header}>
          <Text size="lg">02</Text>
          <Title>Features Of $NODAC</Title>
        </Group>
        <SimpleGrid className={classes.features} cols={3} spacing={40} breakpoints={[{ maxWidth: 1024, cols: 1, spacing: 60 }]}>
          <Group align="flex-start" noWrap>
            <Image className={classes.blockIcon} src={reward} height={64} />
            <div className={classes.blockDescription}>
              <Title order={6}>Double Rewards Tokenomics</Title>
              <Divider className={classes.blockDivider} />
              <Text size="md">
                Earn in 2 Ways: <div>1. Reflections from Daily Volume</div> <div>2. Dividends from Node Rewards</div>
              </Text>
            </div>
          </Group>
          {blocks}
        </SimpleGrid>
        <Divider />
      </Container>
    </Section>
  );
};

export default Features;
