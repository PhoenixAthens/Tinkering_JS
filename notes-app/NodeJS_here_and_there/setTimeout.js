// const time = 3000;
// const onTimeout = () => {
//   console.log("Done!");
// };
// setTimeout(onTimeout, 3000);
// //After 3s
// //we get Done!

//using setInterval part 2

// const time2 = 500;
// let current = 0;
// const onTimeout2 = () => {
//   current += time2;
//   console.log(`Waiting ${current / 1000} secongs! `);
// };
// setInterval(onTimeout2, time2);

// aiting 0.5 secongs!
// Waiting 1 secongs!
// Waiting 1.5 secongs!
// Waiting 2 secongs!
// Waiting 2.5 secongs!
// Waiting 3 secongs!
// Waiting 3.5 secongs!
// Waiting 4 secongs!
// Waiting 4.5 secongs!
// Waiting 5 secongs!

//creating an interval that terminates
const time = 5000;
const interval_close = () => {
  clearInterval(itrvl);
  console.log("Done!");
};
setTimeout(interval_close, time);

let timeStart = 0;
const timeJump = 500;
const itrvl = setInterval(() => {
  timeStart += timeJump;
  console.log(`Waiting at ${timeStart / 1000} seconds`);
}, timeJump);
// Waiting at 0.5 seconds
// Waiting at 1 seconds
// Waiting at 1.5 seconds
// Waiting at 2 seconds
// Waiting at 2.5 seconds
// Waiting at 3 seconds
// Waiting at 3.5 seconds
// Waiting at 4 seconds
// Waiting at 4.5 seconds
// Done!
