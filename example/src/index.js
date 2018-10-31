class Super {
  static staticValue = '<i am static>'
  constructor(value) {
    this.value = value
  }
}

class Sub extends Super {}

const instance = new Sub(123)

console.log('Sub instance\' value is: ', instance.value) // 123
console.log('Sub static value is: ', Sub.staticValue) // <i am static>