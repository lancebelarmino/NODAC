import React, { useState } from 'react';
import { Title, Text, Image, Divider, SimpleGrid, Pagination } from '@mantine/core';
import Section from '../Section/Section';
import WindowCard from '../Card/WindowCard';
import orlean from '../../assets/images/team-orlean.jpg';
import z from '../../assets/images/team-z.jpg';
import watson from '../../assets/images/team-watson.jpg';
import grace from '../../assets/images/team-grace.jpg';
import lara from '../../assets/images/team-lara.jpg';
import j from '../../assets/images/team-j.jpg';
import lessy from '../../assets/images/team-lessy.jpg';
import aly from '../../assets/images/team-aly.jpg';
import elle from '../../assets/images/team-elle.jpg';
import superman from '../../assets/images/team-superman.jpg';
import shiroe from '../../assets/images/team-shiroe.jpg';
import useStyles from './Team.styles';

const teamData = [
  { name: 'Orlean', position: 'Founder, Lead Developer', image: orlean },
  { name: 'Z', position: 'Blockchain Developer', image: z },
  { name: 'Watson', position: 'Head of PR & CMO', image: watson },
  { name: 'Grace', position: 'SMM Manager & Strategist', image: grace },
  { name: 'Lara', position: 'Tokenomics Advisor', image: lara },
  { name: 'J', position: 'Project Manager & HR', image: j },
  { name: 'Lessy', position: 'Graphic Artist, Web Developer', image: lessy },
  { name: 'Aly', position: 'Twitter Support, Content Creator', image: aly },
  { name: 'Elle', position: 'Community Support', image: elle },
  { name: 'Superman', position: 'Community Support', image: superman },
  { name: 'Shiroe', position: 'Community Support', image: shiroe },
];

const Team = () => {
  const { classes } = useStyles();

  // Custom Pagination
  const [pageNumber, setPageNumber] = useState(1);
  const memberPerPage = 4;
  const indexOfLastMember = pageNumber * memberPerPage;
  const indexOfFirstMember = indexOfLastMember - memberPerPage;
  const currentMembers = teamData.slice(indexOfFirstMember, indexOfLastMember).map((item) => (
    <WindowCard key={item.name} className={classes.card}>
      <div className={classes.cardContent}>
        <Image className={classes.cardAvatar} src={item.image} height={260} />
        <Title order={4}>{item.name}</Title>
        <Divider className={classes.cardDivider} />
        <Text>{item.position}</Text>
      </div>
    </WindowCard>
  ));
  const pageCount = Math.ceil(teamData.length / memberPerPage);

  return (
    <Section className={classes.section}>
      <div className={classes.header}>
        <Title order={1}>Meet The Team</Title>
      </div>

      <div className={classes.team}>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: 1024, cols: 2, spacing: 40 },
            { maxWidth: 768, cols: 1, spacing: 40 },
          ]}>
          {currentMembers}
        </SimpleGrid>
      </div>

      <div className={classes.pagination}>
        <Pagination
          classNames={{
            item: classes.paginationItem,
          }}
          page={pageNumber}
          onChange={setPageNumber}
          total={pageCount}
          size="xl"
          radius="xl"
        />
      </div>
    </Section>
  );
};

export default Team;
