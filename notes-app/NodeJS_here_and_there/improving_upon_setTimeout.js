const wait = 3000;
console.log(`Waiting for ${wait / 1000} seconds!`);
const intervalCloser = () => {
  clearInterval(intrvl);
  console.log("\nDone!");
};
setTimeout(intervalCloser, wait);
let currTime = 0;
let timeJump = 500;
const intrvl = setInterval(() => {
  currTime += timeJump;
  const p = Math.floor((currTime / timeJump) * 100);
  //both .clear and .clearLine() result in a similar kind of output.
  //process.stdout.clear; this is a property
  process.stdout.clearLine(); //this is a method!
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting... ${p}`);
}, timeJump);
