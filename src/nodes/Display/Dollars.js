import React from "react";
import ReactDOM from "react-dom";
import Blockies from "react-blockies";

import { makeStyles } from "@material-ui/core/styles";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";

function Dollars() {
  this.addInput("", 0);
  this.addOutput("", "number");
  this.properties = {
    blockieSize: 50,
    placeholder: "Enter text",
    title: "Dollars",
    value: null,
  };
  this.size = [190, 55];
}

Dollars.title = "Dollars";

Dollars.prototype.onConnectionsChange = function (args) {
  console.log("onConnectionsChange", args);
};

Dollars.prototype.onExecute = function () {
  let input = this.getInputData(0);
  if (
    this.inputs[0] &&
    typeof input != "undefined" &&
    this.properties.value != input
  ) {
    this.properties.value = input;
  }
  this.setOutputData(0, this.properties.value);
};

Dollars.prototype.getTitle = function () {
  if (this.flags.collapsed && this.properties.value) {
    return this.properties.value;
  }
  return this.properties.title;
};

Dollars.prototype.handle = function (e) {
  this.properties.value = e.target.value;
  this.setOutputData(0, this.properties.value);
  this.onDrawBackground();
};

Dollars.prototype.onDrawBackground = function (ctx) {
  if (this.flags.collapsed) {
    /*this.render(
      <div>

      </div>
    )*/
    this.destory(); ///SHOULD WE DESTORY THE ELEMENT FROM THE DOM OR
  } else {
    this.render(
      <div>
        <FormControl fullWidth>
          <InputLabel style={{ color: "#999999" }} htmlFor="adornment-amount">
            USD
          </InputLabel>
          <Input
            style={{ color: "#eeeeee" }}
            id="adornment-amount"
            value={this.properties.value}
            onChange={this.handle.bind(this)}
            startAdornment={
              <InputAdornment position="start">
                <span style={{ color: "#cccccc" }}>$</span>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
};

export default Dollars;
