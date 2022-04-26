import React, { useState, useEffect } from 'react';
import { connect, styled, decode } from 'frontity';
import { Title, SimpleGrid, Pagination } from '@mantine/core';
import Item from './list-item';
import Section from '../Section/Section';
import useStyles from './list.styles';

const List = ({ state }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [sliderDirection, setSliderDirection] = useState(1);
  const { classes } = useStyles();

  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  // Custom Pagination
  const postsPerPage = 3;
  const pageCount = Math.ceil(data.items.length / postsPerPage);
  const indexOfLastPost = pageNumber * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.items.slice(indexOfFirstPost, indexOfLastPost).map(({ type, id }) => {
    const item = state.source[type][id];
    return <Item key={item.id} item={item} direction={sliderDirection} />;
  });

  useEffect(() => {
    const prevPage = JSON.parse(localStorage.getItem('newsPrevNumber'));

    if (pageNumber > prevPage) {
      setSliderDirection(-1);
    } else {
      setSliderDirection(1);
    }

    localStorage.setItem('newsPrevNumber', JSON.stringify(pageNumber));
  }, [pageNumber]);

  return (
    <Section className={classes.section}>
      <div className={classes.header}>
        <Title order={1}>News & Updates</Title>
      </div>

      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}: <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      <SimpleGrid className={classes.posts} cols={3} spacing={40} breakpoints={[{ maxWidth: 1024, cols: 1, spacing: 60 }]}>
        {currentPosts}
      </SimpleGrid>

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

export default connect(List);

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
