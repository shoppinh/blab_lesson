function Download() {
  this.size = [60, 30];
  this.addInput("data", 0 );
  this.addInput("download", -1 );
  this.properties = { filename: "data.json" };
  this.value = null;
  var that = this;
  this.addWidget("button","Tải về","", function(v){
    if(!that.value)
    return;
    that.downloadAsFile();
  });
}

Download.title = "Tải về (Download)";
Download.desc = "Tải về dữ liệu";

Download.prototype.downloadAsFile = function()
{
  if(this.value == null)
  return;

  var str = null;
  if(this.value.constructor === String)
  str = this.value;
  else
  str = JSON.stringify(this.value);

  var file = new Blob([str]);
  var url = URL.createObjectURL( file );
  var element = document.createElement("a");
  element.setAttribute('href', url);
  element.setAttribute('download', this.properties.filename );
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  setTimeout( function(){ URL.revokeObjectURL( url ); }, 1000*60 ); //wait one minute to revoke url
}

Download.prototype.onAction = function(action, param) {
  var that = this;
  setTimeout( function(){ that.downloadAsFile(); }, 100); //deferred to avoid blocking the renderer with the popup
}

Download.prototype.onExecute = function() {
  if (this.inputs[0]) {
    this.value = this.getInputData(0);
  }
};

Download.prototype.getTitle = function() {
  if (this.flags.collapsed) {
    return this.properties.filename;
  }
  return this.title;
};

export default Download
