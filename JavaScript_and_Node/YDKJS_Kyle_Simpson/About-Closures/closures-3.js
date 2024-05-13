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
