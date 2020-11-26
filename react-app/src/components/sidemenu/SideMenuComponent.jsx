import React, { forwardRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";

// export interface AppMenuItemComponentProps {
//   className?: string;
//   link?: string | null; // because the InferProps props allows alows null value
//   onClick?: (event: React.MouseEvent<HTMLElement>) => void;
// }

const SideMenuItemComponent = (props) => {
  const { className, onClick, link, children } = props;

  // If link is not set return the orinary ListItem
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

  // Return a LitItem with a link component
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