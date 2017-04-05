const Exp = require('./exp.js');

class expBinexp extends Exp {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `${this.body}`;
  }

  analyze(context) {
    this.body.analyze(context);
    this.type = this.body.type;
  }
}

module.exports = expBinexp;
