let arr = [1, 2, 3, 4, 5, 6];
let fns = function (a, b) {
  console.log(`a: ${a}, b: ${b}`);
};
fns.apply(fns, arr);

let fnsWrapper = function (...args) {
  fns.apply(fns, args);
};
fnsWrapper(1, 2, 3, 4, 5, 6, 7);
