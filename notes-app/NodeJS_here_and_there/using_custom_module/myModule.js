let count = 0;
const inc = () => count++;
const dec = () => count--;
const getCount = () => console.log(count);
module.exports = {
  anything: true,
  inc,
  dec,
  getCount,
  count,
};
