import React from 'react';

const NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
   currency:"USD",
   style: "currency" 
})


const numberFormatter = (number: number) => {
  return NUMBER_FORMATTER.format(number);
}

export default numberFormatter;