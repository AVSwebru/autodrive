class Counter {
  constructor(element, options) {
    this.element = element;
    this.btnMinus = element.querySelector('.js-counter-minus');
    this.btnPlus = element.querySelector('.js-counter-plus');
    this.input = element.querySelector('.js-counter-input');
    this.maxVal = options.maxVal || Infinity;
  }
  init() {
    this.btnMinus.addEventListener('click', () => this.decrease());
    this.btnPlus.addEventListener('click', () => this.increase());
  }
  increase() {
    var newVal = ++this.input.value;
    if (newVal <= this.maxVal) {
      this.input.value = newVal;
    } else {
      this.input.value = this.maxVal;
    }
  }
  decrease() {
    var newVal = --this.input.value;
    if (newVal >= 1) {
      this.input.value = newVal;
    } else {
      this.input.value = 1;
    }
  }
}

var counters = document.querySelectorAll('.js-counter');

if (counters) {
  counters.forEach((element) => {
    new Counter(element, { maxVal: 9999 }).init();
  });
}
