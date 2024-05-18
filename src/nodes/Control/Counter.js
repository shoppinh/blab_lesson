function Counter() {
  this.addInput("inc", -1);
  this.addInput("dec", -1);
  this.addInput("reset", -1);
  this.addOutput("change", -1);
  this.addOutput("count", "number");
  this.num = 0;
}

Counter.title = "Counter";
Counter.desc = "Đếm các sự kiện";

Counter.prototype.getTitle = function () {
  if (this.flags.collapsed) {
    return String(this.num);
  }
  return this.title;
};

Counter.prototype.onAction = function (action, param) {
  var v = this.num;
  if (action == "inc") {
    this.num += 1;
  } else if (action == "dec") {
    this.num -= 1;
  } else if (action == "reset") {
    this.num = 0;
  }
  if (this.num != v) {
    this.trigger("change", this.num);
  }
};

Counter.prototype.onDrawBackground = function (ctx) {
  if (this.flags.collapsed) {
    return;
  }
  ctx.fillStyle = "#AAA";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.fillText(this.num, this.size[0] * 0.5, this.size[1] * 0.5);
};

Counter.prototype.onExecute = function () {
  this.setOutputData(1, this.num);
};

export default Counter;
