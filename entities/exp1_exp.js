const Exp1 = require('./exp1.js');

class exp1Exp extends Exp1 {
  constructor(exp1) {
    super();
    this.exp1 = exp1;
  }

  toString() {
    return `${this.exp1}`;
  }

  analyze(context) {
    this.exp1.analyze(context);
    this.type = this.exp1.type;
  }

  optimize() {
    this.exp1 = this.exp1.optimize();
    return this;
  }
}

module.exports = exp1Exp;
