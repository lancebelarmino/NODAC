import { SimpleGrid, Text, Image, Title, Button } from '@mantine/core';
import Section from '../Section/Section';
import nodac from '../../assets/images/hero-nodac.png';
import arrow from '../../assets/images/btn-arrow.png';
import useStyles from './Hero.styles';

const btnData = [
  { title: 'Start earning eth passively', description: 'Set slippage to 14% or more.', onClick: () => {} },
  { title: 'Start earning avax passively', description: 'Set slippage to 10% or more.', onClick: () => {} },
  { title: 'Start earning ftm passively', description: 'Set slippage to 15% or more.', onClick: () => {} },
];

const Hero = () => {
  const { classes } = useStyles();

  const btns = btnData.map((item) => (
    <Button key={item.title} className={classes.btn} classNames={{ label: classes.btnLabel }}>
      <span className={classes.btnInfo}>
        <Text className={classes.btnTitle} size="lg" transform="uppercase">
          {item.title}
        </Text>
        <Text size="md">{item.description}</Text>
      </span>
      <Image src={arrow} />
    </Button>
  ));

  return (
    <Section className={classes.hero}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 1024, cols: 1, spacing: 'md' }]}>
        <Image className={classes.heroImage} src={nodac} fit="contain" />
        <div>
          <Title className={classes.heroTitle} order={1}>
            Investing in nodes made easier and more convenient for you.
          </Title>
          {btns}
        </div>
      </SimpleGrid>
    </Section>
  );
};

export default Hero;
