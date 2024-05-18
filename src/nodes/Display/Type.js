function Type() {
  this.addInput("", "");
  this.addOutput("", 0);
}

Type.title = "Loại";

Type.prototype.getTitle = function () {
  if (this.flags.collapsed) {
    return this.inputs[0].label;
  }
  return this.title;
};

Type.prototype.onDrawBackground = function (ctx) {
  this.value = typeof this.getInputData(0);
  this.inputs[0].label = this.value;
  this.setOutputData(0, this.value);
};

Type.prototype.onExecute = function () {
  this.setOutputData(0, this.getInputData(0));
};

export default Type;
