import React from "react";
import ReactDOM from "react-dom";
import Blockies from "react-blockies";

import { Input, FilledInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Title() {
  this.properties = {
    fontSize: 44,
    blockieSize: 50,
    placeholder: "",
    title: "Tiêu đề",
    value: null,
    fontFamily: "'Roboto', sans-serif",
    color: "#dddddd",
  };
  this.size = [500, 0];
}

Title.title = "Tiêu đề";
Title.title_color = "#222";
//Title.bgcolor ="#000"

Title.prototype.onConnectionsChange = function (args) {
  console.log("onConnectionsChange", args);
};

Title.prototype.getTitle = function () {
  if (this.flags.collapsed && this.properties.value) {
    return this.properties.value;
  }
  return "";
};

Title.prototype.handle = function (e) {
  this.properties.value = e.target.value;
  this.setOutputData(0, this.properties.value);
  this.onDrawBackground();
  if (this.properties.value) global.title = this.properties.value;
};

Title.prototype.onDrawBackground = function (ctx) {
  if (this.flags.collapsed) {
    /*this.render(
      <div>

      </div>
    )*/
    this.destory(); ///SHOULD WE DESTORY THE ELEMENT FROM THE DOM OR
  } else {
    this.render(
      <div>
        <form className={"SOMECONTAINERCLASS"} noValidate autoComplete="off">
          <Input
            autoFocus
            style={{
              opacity: 0.77,
              width: "100%",
              height: 40,
              color: this.properties.color,
              fontSize: this.properties.fontSize,
              marginTop: 10,
              fontFamily: this.properties.fontFamily,
            }}
            id="outlined-name"
            label="Name"
            placeholder={this.properties.placeholder}
            value={this.properties.value}
            onChange={Title.prototype.handle.bind(this)}
            margin="normal"
            variant="outlined"
          />
        </form>
      </div>
    );
  }
};

export default Title;
