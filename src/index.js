// Given: number, your task is to implement function that reverse digits of this number.
// For example:
// reverse(123); // 321
// reverse(233); // 332
// reverse(535); // 535
// reverse(95034); // 43059
module.exports = function reverse (n) {
    n<0? n=n*(-1)+'' : n=n+'';   
  return n.split('').reverse().join('');
}
