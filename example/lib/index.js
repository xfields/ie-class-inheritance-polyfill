'use strict';

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Super = function Super(value) {
  _classCallCheck(this, Super);

  this.value = value;
};

Super.staticValue = '<i am static>';

var Sub = function (_Super) {
  _inherits(Sub, _Super);

  function Sub() {
    _classCallCheck(this, Sub);

    return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
  }

  return Sub;
}(Super);

var instance = new Sub(123);

console.log('Sub instance\' value is: ', instance.value);
console.log('Sub static value is: ', Sub.staticValue);