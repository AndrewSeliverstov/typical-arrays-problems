
exports.min = function min (array) {
  if ((arguments.length === 0)||(array.length === 0 )) {
    return 0;
  } else {
    let min = Math.min( ...array );
    return min;
  }
};

exports.max = function max (array) {
  if ((arguments.length === 0)||(array.length === 0 )) {
    return 0;
  } else {
    let max = Math.max( ...array );
    return max;
  }
};

exports.avg = function avg (array) {
  if ((arguments.length === 0)||(array.length === 0 )) {
    return 0;
  } else {
      let average = 0;
      let sum = 0;

      for (let i = 0; i < array.length; i++) {
          sum += (array[i]);
          average = sum / array.length;
      }
      return average;
    } 
};
