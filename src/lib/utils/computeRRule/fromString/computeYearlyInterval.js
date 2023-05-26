const computeYearlyInterval = (data, rruleObj) => {
  if (rruleObj.freq !== 1) {
    return data.repeat.yearly.interval;
  }

  return rruleObj.interval;
};
  
export default computeYearlyInterval;
  