import React from "react";
import ReactDOM from "react-dom";
import Blockies from "react-blockies";

import { Input, FilledInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Label() {
  this.properties = {
    blockieSize: 50,
    placeholder: "",
    title: "Nhãn",
    value: null,
    fontSize: 28,
  };
  this.size = [300, 0];
}

//Title.bgcolor ="#000"

Label.title = "Nhãn";
Label.title_color = "#222";

Label.prototype.onConnectionsChange = function (args) {
  console.log("onConnectionsChange", args);
};

Label.prototype.getTitle = function () {
  if (this.flags.collapsed && this.properties.value) {
    return this.properties.value;
  }
  return "";
};

Label.prototype.handle = function (e) {
  this.properties.value = e.target.value;
  this.setOutputData(0, this.properties.value);
  this.onDrawBackground();
  if (this.properties.value) global.title = this.properties.value;
};

/*
<TextareaAutosize
  autoFocus
  multiline={true}
  style={{opacity:0.777,width:"100%",height:40,color:"#FFFFFF",background:"#222",fontSize:this.properties.fontSize,border:"none"}}
  id="outlined-name"
  label="Name"
  placeholder={this.properties.placeholder}
  value={this.properties.value}
  onChange={Label.prototype.handle.bind(this)}
  margin="normal"
  variant="outlined"
/>
 */

Label.prototype.onDrawBackground = function (ctx) {
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
            style={{
              width: "100%",
              height: 40,
              color: "#FFFFFF",
              fontSize: this.properties.fontSize,
            }}
            id="outlined-name"
            label="Name"
            placeholder={this.properties.placeholder}
            value={this.properties.value}
            onChange={Label.prototype.handle.bind(this)}
            margin="normal"
            variant="outlined"
          />
        </form>
      </div>
    );
  }
};

export default Label;
