import React from 'react';

const Box = (props) => {
    const boxStyle = {
        height: '50px',
        width: '50px',
        backgroundColor: props.color,
        border: 'none',
        margin: '3px'
    };

  return (
      <div style={boxStyle}></div>
  )
}

export default Box