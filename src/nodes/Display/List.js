import React from 'react';

import { ListItem, ListItemText, List as MaterialList } from '@material-ui/core';

function List() {
  this.addInput("",0)
  this.addInput("add",-1)
  this.addInput("reset",-1)
  this.addOutput("",0)
  this.addOutput("latest",0)
  this.properties =  {title:"Danh sách (List)",fontSize:18,autoAddNewItem:true}
  this.size = [250,250]
  this.list = []
  this.lastItem = null
}

List.title = "Danh sách (List)";

List.prototype.onExecute = function() {
  let input = this.getInputData(0)
  if(input && this.lastItem!=input && this.properties.autoAddNewItem){
    this.lastItem = input
    this.list.push(input)
  }
  this.setOutputData(1,this.lastItem)
  this.setOutputData(0,this.list)
}

List.prototype.onAction = function(action) {
  if(action == "reset"){
    this.list = []
  }else{
    let input = this.getInputData(0)
    if(input){
      this.lastItem = input
      this.list.push(input)
    }
  }
}


List.prototype.onDrawBackground = function(ctx) {
  if (this.flags.collapsed) {
    this.destory()///SHOULD WE DESTORY THE ELEMENT FROM THE DOM OR
  }else{
    this.render(
      <div>
        <MaterialList dense={true}>
          {
            this.list.map( item =>{
              return (
                <ListItem>
                  <ListItemText
                    primary={item}
                  />
                </ListItem>
              )
            })
          }
        </MaterialList>
      </div>
    )
  }
};

export default List
