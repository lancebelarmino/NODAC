import React from 'react';
import List from '../List';
import useStyles from './News.styles';

const News = () => {
  const { classes } = useStyles();
  return (
    <div>
      <List />
    </div>
  );
};

export default News;
