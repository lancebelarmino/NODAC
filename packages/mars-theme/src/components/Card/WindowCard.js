import React from 'react';
import { Divider } from '@mantine/core';
import { ReactComponent as Dot } from '../../assets/svg/window-dot.svg';
import { ReactComponent as Close } from '../../assets/svg/window-close.svg';
import useStyles from './WindowCard.styles';

const WindowCard = ({ children, className }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.card, className)}>
      <div className={classes.controls}>
        <svg id="window-dot" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path id="Path_5" data-name="Path 5" d="M0,0H20V20H0Z" fill="none" />
          <circle id="Ellipse_1" data-name="Ellipse 1" cx="4" cy="4" r="4" transform="translate(6 6)" />
        </svg>

        <svg id="window-close" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path id="Path_5" data-name="Path 5" d="M0,0H20V20H0Z" fill="none" />
          <path id="Path_6" data-name="Path 6" d="M10,9.03l3.394-3.394.97.97L10.97,10l3.394,3.394-.97.97L10,10.97,6.606,14.364l-.97-.97L9.03,10,5.636,6.606l.97-.97Z" />
        </svg>
      </div>
      {children}
    </div>
  );
};

export default WindowCard;
