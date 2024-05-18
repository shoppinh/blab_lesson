function Timer() {
  this.addProperty("interval", 3000);
  this.addProperty("event", "tick");
  this.addOutput("on_tick", -1);
  this.time = 0;
  this.last_interval = 3000;
  this.triggered = false;
  this.size[0] = 140;
}

Timer.title = "Đếm thời gian";
Timer.desc = "clock, repeat";

Timer.prototype.onStart = function () {
  this.time = 0;
};

Timer.prototype.getTitle = function () {
  return "Đếm thời gian";
};

Timer.on_color = "#AAA";
Timer.off_color = "#222";

Timer.prototype.onDrawBackground = function () {
  this.boxcolor = this.triggered ? Timer.on_color : Timer.off_color;
  this.triggered = false;
};

Timer.prototype.onExecute = function () {
  var dt = this.graph.elapsed_time * 1000; //in ms

  var trigger = this.time == 0;

  this.time += dt;
  this.last_interval = Math.max(1, this.getInputOrProperty("interval") | 0);

  if (
    !trigger &&
    (this.time < this.last_interval || isNaN(this.last_interval))
  ) {
    if (this.inputs && this.inputs.length > 1 && this.inputs[1]) {
      this.setOutputData(1, false);
    }
    return;
  }

  this.triggered = true;
  this.time = this.time % this.last_interval;
  this.trigger("on_tick", this.properties.event);
  if (this.inputs && this.inputs.length > 1 && this.inputs[1]) {
    this.setOutputData(1, true);
  }
  this.outputs[0].label = this.last_interval.toString() + "ms";
};

Timer.prototype.onGetInputs = function () {
  return [["interval", "number"]];
};

Timer.prototype.onGetOutputs = function () {
  return [["tick", "boolean"]];
};

export default Timer;
