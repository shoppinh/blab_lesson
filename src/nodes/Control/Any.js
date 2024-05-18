function Any() {
  this.addInput("A", -1); //-1 is LiteGraph.ACTION
  this.addInput("B", -1); //-1 is LiteGraph.ACTION
  this.addInput("C", -1); //-1 is LiteGraph.ACTION
  this.addOutput("output", -1); // -1 is LiteGraph.EVENT
}

Any.title = "Bất kỳ";

Any.prototype.onAction = function (event, action) {
  this.trigger("output");
};

export default Any;
