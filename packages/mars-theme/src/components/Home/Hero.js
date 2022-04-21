import { SimpleGrid, Text, Image, Title, Anchor } from '@mantine/core';
import Section from '../Section/Section';
import nodac from '../../assets/images/hero-nodac.png';
import arrow from '../../assets/images/btn-arrow.png';
import useStyles from './Hero.styles';

const btnData = [
  { title: 'Start earning eth passively', description: 'Set slippage to 14% or more.', link: 'https://app.uniswap.org/#/swap?outputCurrency=0x803e78269f7f013b7d13ba13243be10c66418a70&chain=mainnet' },
  { title: 'Start earning avax passively', description: 'Set slippage to 10% or more.', link: 'https://traderjoexyz.com/trade?outputCurrency=0x803e78269f7f013b7d13ba13243be10c66418a70#/' },
  { title: 'Start earning ftm passively', description: 'Set slippage to 15% or more.', link: ' https://spookyswap.finance/swap?outputCurrency=0x803e78269f7f013b7d13ba13243be10c66418a70' },
];

const Hero = () => {
  const { classes } = useStyles();

  const btns = btnData.map((item) => (
    <Anchor key={item.title} className={classes.btn} href={item.link} target="_blank" rel="noreferrer">
      <span className={classes.btnInfo}>
        <Text className={classes.btnTitle} size="lg" transform="uppercase">
          {item.title}
        </Text>
        <Text size="md">{item.description}</Text>
      </span>
      <Image src={arrow} />
    </Anchor>
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
