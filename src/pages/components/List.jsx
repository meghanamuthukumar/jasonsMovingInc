import * as React from "react";
import "./List.css";
import ListItemListItem0Density from "./ListItemListItem0Density";
const List = (props) => {
  return (
    <div className={`list ${props.className || ""}`}>
      <ListItemListItem0Density {...props.listItemListItem0Density1} />
      <ListItemListItem0Density {...props.listItemListItem0Density3} />
      <ListItemListItem0Density {...props.listItemListItem0Density10} />
    </div>
  );
};
export default List;
