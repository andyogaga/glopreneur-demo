import React from 'react';

const Icon = (props) => {
  return <img src={props.src} alt={props.alt} style={{height: 18, width: 18, marginLeft: 10, marginRight: 10}} />
};

export default Icon;