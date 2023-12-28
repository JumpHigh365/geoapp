import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';



const Stepper = () => {
  const [count, setCount] = useState(40);

  const increment = () => {
    if (count<80) {
    setCount(count + 5);
    }
  };

  const decrement = () => {
    if (count > 20) {
      setCount(count - 5);
    }
  };

  return (
    <div className='flex font-semibold'>
      <button className='w-10 h-10 text-base bg-white border-2 border-gray-400 rounded-l-full' onClick={decrement}><FontAwesomeIcon icon={faMinus} /></button>
      <div className='flex w-10 h-10 justify-center items-center bg-gray-200  border-t-2 border-b-2 border-gray-400'><span >{count}</span></div>
      <button className='w-10 h-10 text-base bg-white border-2 border-gray-400 rounded-r-full' onClick={increment}><FontAwesomeIcon icon={faPlus} /></button>
    </div>
  );
};

export default Stepper;
