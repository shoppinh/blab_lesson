function OR() {
  this.addInput("",0)
  this.addInput("",0)
  this.addOutput("", "");
  this.size = [100,50];
}

OR.title = "Hoặc (OR)";

OR.prototype.onExecute = function() {
  this.setOutputData(0, (this.getInputData(0)||this.getInputData(1)));
};


export default OR
