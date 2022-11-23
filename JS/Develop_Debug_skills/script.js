'use strict';
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //c. FIX
    value: Number(prompt('Degree celsius:')),
  };
  //B. FIND
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A. IDENTIFY
console.log(measureKelvin(), `k`);
