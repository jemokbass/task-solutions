// 4 kyu

function chain(functions) {
  const Nested = function (x) {
    this._ = x;
  };

  for (let [key, value] of Object.entries(functions)) {
    Nested.prototype[key] = function () {
      const args = [].slice.call(arguments);
      if (this._) {
        args.unshift(this._);
      }

      const newFunction = value.apply(null, args);

      return new Nested(newFunction);
    };
  }

  Nested.prototype.execute = function () {
    return this._;
  };

  return new Nested();
}
