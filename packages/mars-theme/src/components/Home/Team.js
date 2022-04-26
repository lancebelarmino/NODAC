import React, { useState } from 'react';
import { Title, Text, Image, Divider, SimpleGrid, UnstyledButton } from '@mantine/core';
import { usePagination } from '@mantine/hooks';
import { sliderVariant } from '../../utils/framer-variants';
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
  const [sliderDirection, setSliderDirection] = useState(1);
  const { classes } = useStyles();

  // Custom Pagination
  const memberPerPage = 4;
  const pageCount = Math.ceil(teamData.length / memberPerPage);
  const pagination = usePagination({ total: pageCount, initialPage: 1 });
  const indexOfLastMember = pagination.active * memberPerPage;
  const indexOfFirstMember = indexOfLastMember - memberPerPage;
  const teamList = teamData.slice(indexOfFirstMember, indexOfLastMember).map((item) => (
    <WindowCard key={item.name} className={classes.card} variants={sliderVariant} initial="hidden" animate="visible" exit="exit" custom={sliderDirection}>
      <div className={classes.cardContent}>
        <Image className={classes.cardAvatar} src={item.image} height={260} />
        <Title order={4}>{item.name}</Title>
        <Divider className={classes.cardDivider} />
        <Text>{item.position}</Text>
      </div>
    </WindowCard>
  ));

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
          {teamList}
        </SimpleGrid>
      </div>

      <div className={classes.pagination}>
        <UnstyledButton
          className={classes.paginationBtn}
          onClick={() => {
            setSliderDirection(-1);
            pagination.previous();
          }}
          {...(pagination.active === 1 && { disabled: true })}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="21.5" transform="matrix(-1 0 0 1 22 22)" stroke="#9A9A9A" />
            <path d="M21.2187 22L24.5187 18.7L23.576 17.7573L19.3333 22L23.576 26.2427L24.5187 25.3L21.2187 22Z" fill="black" />
          </svg>
        </UnstyledButton>
        <UnstyledButton
          className={classes.paginationBtn}
          onClick={() => {
            setSliderDirection(1);
            pagination.next();
          }}
          {...(pagination.active === pageCount && { disabled: true })}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21.5" stroke="#9A9A9A" />
            <path d="M22.7813 22L19.4813 18.7L20.424 17.7573L24.6667 22L20.424 26.2427L19.4813 25.3L22.7813 22Z" fill="black" />
          </svg>
        </UnstyledButton>
      </div>
    </Section>
  );
};

export default Team;
