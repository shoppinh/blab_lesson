import React from "react";

import { TextareaAutosize } from "@material-ui/core";

function Comment() {
  this.properties = {
    fontSize: 18,
    placeholder: "// Comment...",
    title: "Comment",
    value: null,
  };
  this.size = [500, 0];
}

Comment.title = "Comment";
Comment.title_color = "#222";
//Comment.bgcolor ="#000"

Comment.prototype.onConnectionsChange = function (args) {
  console.log("onConnectionsChange", args);
};

Comment.prototype.getTitle = function () {
  if (this.flags.collapsed && this.properties.value) {
    return this.properties.value;
  }
  return "";
};

Comment.prototype.handle = function (e) {
  this.properties.value = e.target.value;
  this.setOutputData(0, this.properties.value);
  this.onDrawBackground();
  if (this.properties.value) global.title = this.properties.value;
};

Comment.prototype.onDrawBackground = function (ctx) {
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
          <TextareaAutosize
            autoFocus
            style={{
              opacity: 0.3333,
              width: "100%",
              color: "#FFFFFF",
              background: "none",
              border: "none",
              fontSize: this.properties.fontSize,
              marginTop: 10,
            }}
            id="outlined-name"
            label="Name"
            placeholder={this.properties.placeholder}
            value={this.properties.value}
            onChange={Comment.prototype.handle.bind(this)}
            margin="normal"
            variant="outlined"
          />
        </form>
      </div>
    );
  }
};

export default Comment;
