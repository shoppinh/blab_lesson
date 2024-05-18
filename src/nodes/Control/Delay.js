function Delay() {
  this.size = [120, 30];
  this.addProperty("time_in_ms", 1000);
  this.addInput("", -1);
  this.addOutput("", -1);
}

Delay.title = "Bộ đếm";

Delay.prototype.onAction = function (action, param) {
  setTimeout(() => {
    this.trigger();
  }, this.properties.time_in_ms);
};

export default Delay;
