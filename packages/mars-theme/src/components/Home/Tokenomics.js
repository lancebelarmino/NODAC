import React, { useState } from 'react';
import { Title, Text, Divider, Image, Group, UnstyledButton, Grid } from '@mantine/core';
import Section from '../Section/Section';
import WindowCard from '../Card/WindowCard';
import Stats from '../Stats/Stats';
import ethIcon from '../../assets/images/tokenomics-eth.png';
import avaxIcon from '../../assets/images/tokenomics-avax.png';
import ftmIcon from '../../assets/images/tokenomics-ftm.png';
import useStyles from './Tokenomics.styles';

const ethData = {
  title: 'ETH',
};

const Tokenomics = () => {
  const [activeTab, setActiveTab] = useState('ETH');
  const { classes, cx } = useStyles();

  return (
    <Section className={classes.section}>
      <div className={classes.header}>
        <Title order={1}>Tokenomics</Title>
        <Divider className={classes.headerDivider} />
        <Title order={4}>0x803e78269f7f013b7d13ba13243be10c66418a70</Title>
      </div>

      <div>
        <Group className={classes.tabHeader} position="center">
          <UnstyledButton>
            <Image className={cx(classes.tabIcon, { [classes.activeTabIcon]: activeTab === 'ETH' })} src={ethIcon} onClick={() => setActiveTab('ETH')} />
          </UnstyledButton>
          <UnstyledButton>
            <Image className={cx(classes.tabIcon, { [classes.activeTabIcon]: activeTab === 'AVAX' })} src={avaxIcon} onClick={() => setActiveTab('AVAX')} />
          </UnstyledButton>
          <UnstyledButton>
            <Image className={cx(classes.tabIcon, { [classes.activeTabIcon]: activeTab === 'FTM' })} src={ftmIcon} onClick={() => setActiveTab('FTM')} />
          </UnstyledButton>
        </Group>
        <WindowCard className={classes.card}>
          {activeTab === 'ETH' && <Stats title="ETH" buyData={[13, 10, 1, 1, 1]} sellData={[13, 1, 10, 1, 1]} />}
          {activeTab === 'AVAX' && <Stats title="AVAX" buyData={[9, 6, 1, 1, 1]} sellData={[18, 2, 10, 5, 1]} />}
          {activeTab === 'FTM' && <Stats title="FTM" buyData={[14, 8, 1, 4, 1]} sellData={[14, 1, 8, 4, 1]} />}
        </WindowCard>
      </div>
    </Section>
  );
};

export default Tokenomics;
