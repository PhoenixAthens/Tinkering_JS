for (var i = 0; i <= 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })(i);
}
// 0
// 1
// 2
// 3
// 4
// 5
for (var i = 0; i <= 5; i++) {
  let j = i;
  setTimeout(function () {
    console.log(j);
  }, j * 1000);
}
// 0
// 1
// 2
// 3
// 4
// 5
for (let i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// 0
// 1
// 2
// 3
// 4
// 5
