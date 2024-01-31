function Variable() {
  this.size = [60, 30];
  this.addInput("in");
  this.addOutput("out");
  this.properties = { varname: "Biến (Variable)", global: true };
  this.value = null;
}

Variable.title = "Biến (Variable)";

Variable.prototype.onExecute = function() {
  if(typeof this.getInputData(0) != "undefined"){
    this.value = this.getInputData(0);
    if(this.graph)
    this.graph.vars[ this.properties.varname ] = this.value;
    if(this.properties.global)
    global[this.properties.varname] = this.value;
    this.setOutputData(0, this.value );
  }else{
    if(this.graph)
      this.value =  this.graph.vars[ this.properties.varname ]
    if(this.properties.global)
      this.value = global[this.properties.varname]
    this.setOutputData(0, this.value )
  }
};

Variable.prototype.getTitle = function() {
  return this.properties.varname;
};

export default Variable
