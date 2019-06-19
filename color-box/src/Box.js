import React from 'react';

const Box = props => {
  return (
    <>
      <div
        style={{
          height: `${props.height}em`,
          width: `${props.width}em`,
          backgroundColor: props.bgColor
        }}
      />
      <button onClick={props.remove}>Remove</button>
    </>
  );
};

export default Box;
