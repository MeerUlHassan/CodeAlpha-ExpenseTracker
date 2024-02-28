import React from 'react';

import classes from '../components/styles/Cards.module.css';

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;