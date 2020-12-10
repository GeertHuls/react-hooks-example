import React, { useEffect, useState } from 'react';

const Syntax = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  useEffect(() => {
    console.log('in useEffect');
    return () => {
      console.log('in useEffect Cleanup');
    };
  }, [checkBoxValue]); // If passing an empty dependency array
                            // then useEffect is only called once when
                            // the component is mounted.

  return <div></div>;
};

export default Syntax;
