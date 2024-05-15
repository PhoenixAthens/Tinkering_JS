class DefaultMap extends Map {
  constructor(defaultValue) {
    super();
    this, (defaultValue = defaultValue);
  }
  get(key) {
    if (this.has(key)) {
      return super.get(key);
    } else {
      return this.defaultValue;
    }
  }
}
class Historgram {
  constructor() {
    this.letterCount = new DefaultMap(0);
    this.totalLetters = 0;
  }
  add(text) {
    text = text.replace(/\s/g, "").toUpperCase();
    for (let char of text) {
      let count = this.letterCount.get(char);
      this.letterCount.set(char, count + 1);
      this.totalLetters++;
    }
  }
  toString() {
    let entries = [...this.letterCount];
    entries.sort((a, b) => {
      if (a[1] == b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }
    entries = entries.filter((entry) => entry[1] >= 1);
    let lines = entries.map(
      ([l, n]) => `${l}: ${"=".repeat(Math.round(n))} ${n.toFixed(2)}`,
    );
    return lines.join("\n");
  }
}
async function histogramFromStdin() {
  process.stdin.setEncoding("utf8");
  let histogram = new Historgram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}
histogramFromStdin().then((hist) => {
  console.log(hist.toString());
});
