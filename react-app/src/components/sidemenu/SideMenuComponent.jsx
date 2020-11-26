import React, { forwardRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";

const SideMenuItemComponent = (props) => {
  const { className, onClick, link, children } = props;

  // If link is not set return the ordinary ListItem
  if (!link || typeof link !== "string") {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    );
  }

  // Return a ListItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props, ref) => (
        <NavLink exact {...props} innerRef={ref} />
      ))}
      to={link}
    />
  );
};

export default SideMenuItemComponent;