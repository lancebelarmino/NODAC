import React from 'react';
import { Grid, Image, Text, Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import rewardsIcon from '../../assets/images/tokenomics-rewards.png';
import treasuryIcon from '../../assets/images/tokenomics-treasury.png';
import marketingIcon from '../../assets/images/tokenomics-marketing.png';
import liquidityIcon from '../../assets/images/tokenomics-liquidity.png';
import useStyles from './Stats.styles';

const Stats = ({ title, buyData, sellData }) => {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const { classes, cx } = useStyles();

  const buyList = buyData.map((item, index) => (
    <Grid.Col key={index} className={cx(classes.statsCol, classes.statsColData)} span={2}>
      <Text className={classes.statsTitle} size="lg">
        {item}%
      </Text>
      {index === 0 && (
        <Text className={classes.statsTitle} size="lg">
          BUY TAX
        </Text>
      )}
    </Grid.Col>
  ));

  const sellList = sellData.map((item, index) => (
    <Grid.Col key={index} className={cx(classes.statsCol, classes.statsColData)} span={2}>
      <Text className={classes.statsTitle} size="lg">
        {item}%
      </Text>
      {index === 0 && (
        <Text className={classes.statsTitle} size="lg">
          SELL TAX
        </Text>
      )}
    </Grid.Col>
  ));

  const desktopLayout = (
    <Grid className={classes.stats} columns={10} justify="center">
      <Grid.Col className={classes.statsCol} sm={10} md={2} offset={2}>
        <Image className={classes.statsIcon} src={rewardsIcon} fit="contain" height={64} />
        <Text className={classes.statsTitle} size="lg">
          Reflections
        </Text>
        <Text className={classes.statsTitle} size="lg">
          {title} Rewards
        </Text>
      </Grid.Col>
      <Grid.Col className={classes.statsCol} sm={10} md={2}>
        <Image className={classes.statsIcon} src={treasuryIcon} fit="contain" height={64} />
        <Text className={classes.statsTitle} size="lg">
          Node Treasury
        </Text>
      </Grid.Col>
      <Grid.Col className={classes.statsCol} sm={10} md={2}>
        <Image className={classes.statsIcon} src={marketingIcon} fit="contain" height={64} />
        <Text className={classes.statsTitle} size="lg">
          Marketing & Development
        </Text>
      </Grid.Col>
      <Grid.Col className={classes.statsCol} sm={10} md={2}>
        <Image className={classes.statsIcon} src={liquidityIcon} fit="contain" height={64} />
        <Text className={classes.statsTitle} size="lg">
          Liquidity Pool
        </Text>
      </Grid.Col>

      <Grid.Col span={10}>
        <Divider className={classes.statsDivider} />
      </Grid.Col>

      {buyList}

      <Grid.Col span={10}>
        <Divider className={classes.statsDivider} />
      </Grid.Col>

      {sellList}
    </Grid>
  );

  return (
    <Grid className={classes.stats} columns={10} justify="center">
      <Grid.Col className={classes.statsCol} span={2} offset={2}>
        <Image className={classes.statsIcon} src={rewardsIcon} fit="contain" height={64} />
        <Text className={classes.statsTitle} size="lg">
          Reflections
        </Text>
        <Text className={classes.statsTitle} size="lg">
          {title} Rewards
        </Text>
      </Grid.Col>
      <Grid.Col className={classes.statsCol} span={2}>
        <Image className={classes.statsIcon} src={treasuryIcon} fit="contain" height={64} />
        <Text className={classes.statsTitle} size="lg">
          Node Treasury
        </Text>
      </Grid.Col>
      <Grid.Col className={classes.statsCol} span={2}>
        <Image className={classes.statsIcon} src={marketingIcon} fit="contain" height={64} />
        <Text className={classes.statsTitle} size="lg">
          Marketing & Development
        </Text>
      </Grid.Col>
      <Grid.Col className={classes.statsCol} span={2}>
        <Image className={classes.statsIcon} src={liquidityIcon} fit="contain" height={64} />
        <Text className={classes.statsTitle} size="lg">
          Liquidity Pool
        </Text>
      </Grid.Col>

      <Grid.Col span={10}>
        <Divider className={classes.statsDivider} />
      </Grid.Col>

      {buyList}

      <Grid.Col span={10}>
        <Divider className={classes.statsDivider} />
      </Grid.Col>

      {sellList}
    </Grid>
  );
};

export default Stats;
