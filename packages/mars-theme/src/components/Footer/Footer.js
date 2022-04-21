import { Title, Text, Divider, Grid, SimpleGrid, Image, Group, Anchor } from '@mantine/core';
import Section from '../Section/Section';
import telegram from '../../assets/images/footer-telegram.png';
import discord from '../../assets/images/footer-discord.png';
import twitter from '../../assets/images/footer-twitter.png';
import medium from '../../assets/images/footer-medium.png';
import coingecko from '../../assets/images/footer-coingecko.png';
import coinmarketcap from '../../assets/images/footer-coinmarketcap.png';
import yahoo from '../../assets/images/footer-yahoo.png';
import useStyles from './Footer.styles';

const socialData = [
  { icon: telegram, link: 'https://t.me/nodeaggregatorcapital' },
  { icon: discord, link: 'https://discord.com/invite/jTEg6rMh6P' },
  { icon: twitter, link: 'https://twitter.com/NODACOfficial' },
  { icon: medium, link: 'https://medium.com/@nodac.official' },
  { icon: coingecko, link: 'https://www.coingecko.com/en/coins/node-aggregator-capital' },
  { icon: coinmarketcap, link: '#' },
  { icon: yahoo, link: 'https://news.yahoo.com/news/invest-nodes-nodac-ecosystem-183300036.html' },
];

const Footer = () => {
  const { classes } = useStyles();

  const socialList = socialData.map((item, index) => (
    <Anchor key={index} className={classes.socialIcon} src={item.link} target="_blank" rel="noreferrer">
      <Image src={item.icon} fit="contain" height={48} />
    </Anchor>
  ));

  return (
    <footer>
      <Section className={classes.footer}>
        <Grid className={classes.footerContent}>
          <Grid.Col md={4} className={classes.header}>
            <Title order={1}>Our Socials</Title>
            <Divider className={classes.headerDivider} />
            <Text>Know where to contact us.</Text>
          </Grid.Col>

          <Grid.Col className={classes.socials} md={8}>
            <SimpleGrid cols={2} spacing={16}>
              {socialList}
            </SimpleGrid>
          </Grid.Col>
        </Grid>

        <Divider className={classes.footerDivider} />
        <Group position="apart">
          <Title order={6}>Node Aggregator Capital</Title>
          <Title order={6}>The First One Stop Nodal Management Protocol For Different High Yield Node Projects.</Title>
        </Group>
      </Section>
    </footer>
  );
};

export default Footer;
