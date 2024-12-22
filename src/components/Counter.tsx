import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <h2 className={classes.btn}>{count}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  );
};
