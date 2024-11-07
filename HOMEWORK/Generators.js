class Range {
  constructor(from, to) {
    this.from = from
    this.to = to
  }

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value
    }
  }
}
// now we will create an instance of the class
const range = new Range(1, 3)
console.log("Range Generators")
for (const number of range) {
  console.log(number)
}
