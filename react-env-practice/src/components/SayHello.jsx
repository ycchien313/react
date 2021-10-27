import React from 'react';

const SayHello = (props) => {
  const { name, children } = props;

  return (
    <>
      <div>Hello {name}</div>
      <div>{children}</div>
    </>
  );
};

export default SayHello;
