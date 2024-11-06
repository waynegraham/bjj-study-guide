import React from 'react';

const Belt = (props) => {
    
  const tailwindColors = {
    Blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Purple:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Brown:
      "bg-amber-900 text-amber-50 dark:bg-amber-900 dark:text-amber-50",
    Black: "bg-slate-900 text-slate-50 dark:bg-black dark:text-white",
  };

  return (
    <p className='mb-3'>
      <span
        className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${tailwindColors[props.belt]}`}
      >
        {props.belt}
      </span>
    </p>
  );
};

export default Belt;
