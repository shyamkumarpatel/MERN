import React from 'react';

const Box = (props) => {
    const boxStyle = {
        height: '50px',
        width: '50px',
        color: props.color,
        border: 'none'
    };
  return (
    <div style={boxStyle}></div>
  )
}

export default Box