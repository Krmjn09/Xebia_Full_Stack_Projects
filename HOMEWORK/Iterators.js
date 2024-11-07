class NumberIterator {
  constructor(max) {
    this.max = max
    this.current = 0
  }
  next() {
    if (this.current <= this.max) {
      return { done: false, value: this.current++ }
    }
    return { done: true }
  }
}
//now we will create an instance of the class
const numberIterator = new NumberIterator(3)
console.log("NumberIterator")
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
console.log(numberIterator.next())
