import React from 'react';
import { Container, Group, Title, Text, SimpleGrid, Divider, Image } from '@mantine/core';
import Section from '../Section/Section';
import income from '../../assets/images/why-income.png';
import liquidity from '../../assets/images/why-liquidity.png';
import diversification from '../../assets/images/why-diversification.png';
import convenience from '../../assets/images/why-convenience.png';
import useStyles from './Why.styles';

const blockData = [
  { icon: income, title: 'Passive Income', description: 'Earn passively and let the team do all the work for you.' },
  { icon: liquidity, title: 'Liquidity Asset', description: 'You can sell $NODAC anytime. No lock ups.' },
  { icon: diversification, title: 'Diversification', description: 'You get exposure on different node projects to minimize risk.' },
  { icon: convenience, title: 'Convenience', description: 'No need for you to micro manage your investment.' },
];

const Why = () => {
  const { classes } = useStyles();

  const blocks = blockData.map((item) => (
    <Group key={item.title} align="flex-start" noWrap>
      <Image className={classes.blockIcon} src={item.icon} />
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
          <Text size="lg">01</Text>
          <Title>Why invest in $NODAC?</Title>
        </Group>
        <SimpleGrid className={classes.features} cols={4} spacing={40} breakpoints={[{ maxWidth: 1024, cols: 1, spacing: 60 }]}>
          {blocks}
        </SimpleGrid>
        <Divider />
      </Container>
    </Section>
  );
};

export default Why;
