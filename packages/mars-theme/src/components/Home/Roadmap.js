import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import { Title, Divider, Text, Image, Center, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Section from '../Section/Section';
import WindowCard from '../Card/WindowCard';
import useStyles from './Roadmap.styles';

const Roadmap = () => {
  const [isDesktop, setIsDesktop] = useState();
  const desktop = useMediaQuery('(min-width: 1366px)');
  const { classes, cx } = useStyles();

  useEffect(() => {
    if (desktop) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [desktop]);

  return (
    <Section className={classes.section}>
      <div className={classes.header}>
        <Title order={1}>Roadmap</Title>
        <Divider className={classes.headerDivider} />
        <Text>
          This roadmap serves as a guide for the team and the investors for the upcoming development on the project. Items may be finished first than the others or items may start earlier or later
          than the stated timeframe.
        </Text>
      </div>
      <Center>
        <div className={classes.timeline}>
          <Title className={classes.timelineQuarter} order={2}>
            Q1
          </Title>

          <Grid className={classes.timelineItem} columns={12} align="center">
            <Grid.Col xs={2} md={2} {...(isDesktop && { offset: 5 })}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-check.png" height={40} fit="contain" />
            </Grid.Col>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>The Distribution Phase: Node Rewards Distribution System</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>Node dividends for $NODAC holders. Earn $ETH, $AVAX or $FTM based on your holdings.</Text>
                </div>
              </WindowCard>
            </Grid.Col>
          </Grid>

          <Grid className={cx(classes.timelineItem, classes.timelineItemMobile)} align="center" gutter={40}>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>Node Aggregator Capital Arrives On Fantom Network</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>It's getting spooky!</Text>
                  <Text className={classes.timelineDescription}>Node Aggregator Capital brings $NODAC on Fantom Network to dominate the chain as the first Layer 2 Node-as-a-Service Protocol.</Text>
                  <Text className={classes.timelineDescription}>Taking advantage of the diverse existing node projects.</Text>
                </div>
              </WindowCard>
            </Grid.Col>
            <Grid.Col xs={2} md={2}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-check.png" height={40} fit="contain" />
            </Grid.Col>
          </Grid>

          <Title className={classes.timelineQuarter} order={2}>
            Q2
          </Title>

          <Grid className={classes.timelineItem} align="center" gutter={40}>
            <Grid.Col xs={2} md={2} {...(isDesktop && { offset: 5 })}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-connector.png" height={40} fit="contain" />
            </Grid.Col>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>Website V2</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>
                    A fresh and better looking User Interface! Node Aggregator Capital continues to improve user experience with easy navigation and appealing look.
                  </Text>
                </div>
              </WindowCard>
            </Grid.Col>
          </Grid>

          <Grid className={cx(classes.timelineItem, classes.timelineItemMobile)} align="center" gutter={40}>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>Nodac Tools</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>Node Aggregator Capital helps users on calculation, simulation and visualization by offering tools.</Text>
                </div>
              </WindowCard>
            </Grid.Col>
            <Grid.Col xs={2} md={2}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-connector.png" height={40} fit="contain" />
            </Grid.Col>
          </Grid>

          <Grid className={classes.timelineItem} align="center" gutter={40}>
            <Grid.Col xs={2} md={2} {...(isDesktop && { offset: 5 })}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-connector.png" height={40} fit="contain" />
            </Grid.Col>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>Gamified Node Rewards Distribution System</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>As Node Aggregator Capital grows in Market Capitalization it will be harder to get in without large investment.</Text>
                  <Text className={classes.timelineDescription}>
                    Introducing Gamification with Node Rewards Distribution through lottery. Multiply your incoming node dividends by X1.5, X2, X3, X5 or even X10!
                  </Text>
                  <Text className={classes.timelineDescription}>Feeling lucky?</Text>
                </div>
              </WindowCard>
            </Grid.Col>
          </Grid>

          <Grid className={cx(classes.timelineItem, classes.timelineItemMobile)} align="center" gutter={40}>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>Multi Chain Bridge</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>Enabling the Multi Chain Bridge for $NODAC token opens multiple possibilities to play around the system.</Text>
                  <Text className={classes.timelineDescription}>Move your tokens, focus on a single chain or split across multiple chain? Your move.</Text>
                </div>
              </WindowCard>
            </Grid.Col>
            <Grid.Col xs={2} md={2}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-connector.png" height={40} fit="contain" />
            </Grid.Col>
          </Grid>

          <Grid className={classes.timelineItem} align="center" gutter={40}>
            <Grid.Col xs={2} md={2} {...(isDesktop && { offset: 5 })}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-connector.png" height={40} fit="contain" />
            </Grid.Col>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>Venture Capital: Nodac Dao</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>Introduction of Node Aggregator Capital DAO.</Text>
                  <Text className={classes.timelineDescription}>Governing body that decides the flow of investment funds from node rewards pool.</Text>
                  <Text className={classes.timelineDescription}>
                    Investing on different upcoming Decentralized Finance protocols across multiple chains for the success and sustainability of Node Aggregator Capital.
                  </Text>
                </div>
              </WindowCard>
            </Grid.Col>
          </Grid>

          <Title className={classes.timelineQuarter} order={2}>
            Q3
          </Title>

          <Grid className={cx(classes.timelineItem, classes.timelineItemMobile)} align="center" gutter={40}>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>The Expansion Phase: Nodac Labs Powered By Nodac Dao</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>In order to bring more value to $NODAC and offer new DeFi products to our users, the establishment of NODAC Labs is initiated.</Text>
                  <Text className={classes.timelineDescription}>Building new applications and starting an ecosystem that interacts with different products under Node Aggregator Capital.</Text>
                </div>
              </WindowCard>
            </Grid.Col>
            <Grid.Col xs={2} md={2}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-connector.png" height={40} fit="contain" />
            </Grid.Col>
          </Grid>

          <Grid className={classes.timelineItem} align="center" gutter={40}>
            <Grid.Col xs={2} md={2} {...(isDesktop && { offset: 5 })}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-connector.png" height={40} fit="contain" />
            </Grid.Col>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>Nodac: The Colony</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>Revolutionizing the space by introducing NFT Nodes by NODAC Labs. Tradable. Scalable.</Text>
                </div>
              </WindowCard>
            </Grid.Col>
          </Grid>

          <Grid className={cx(classes.timelineItem, classes.timelineItemMobile)} align="center" gutter={40}>
            <Grid.Col xs={10} md={5}>
              <WindowCard className={classes.timelineCard}>
                <div className={classes.timelineContent}>
                  <Title order={5}>Nodac: The Museum</Title>
                  <Divider className={classes.timelineDivider} />
                  <Text className={classes.timelineDescription}>Native NFT Marketplace for NFT Nodes by NODAC Labs.</Text>
                </div>
              </WindowCard>
            </Grid.Col>
            <Grid.Col xs={2} md={2}>
              <Image className={classes.timelineIcon} src="https://api.nodac.io/wp-content/uploads/2022/04/roadmap-connector.png" height={40} fit="contain" />
            </Grid.Col>
          </Grid>
        </div>
      </Center>
    </Section>
  );
};

export default connect(Roadmap);
