import React, { } from "react";

import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputAdornment from "@material-ui/core/InputAdornment"

import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import FlightTakeOffIcon from "@material-ui/icons/FlightTakeoff"
import NotificationsIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
import SettingIcon from "@material-ui/icons/Settings"
import ViewCompactIcon from "@material-ui/icons/ViewCompact"

import { makeStyles, createStyles } from "@material-ui/core/styles";

import "./Navbar.scss";


const useStyles = makeStyles((theme) =>
  createStyles({
    searchIcon: {
      borderRadius: "12px",
      background: "white",
      height: "45px",
      width: "400px",
      color: "#c1c1c1"
    },
  })
);
  


const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className="nav">
      <div className="nav-left-items">
        <ViewCompactIcon fontSize="large"/>
        <FlightTakeOffIcon fontSize="large"/>
      </div>
      <div className="nav-right_items">
        <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.searchIcon}
              // value={values.weight}
              // onChange={handleChange('weight')}
              startAdornment={<InputAdornment position="start"><SearchIcon fontSize="large"/></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
        <NotificationsIcon />
        <ChatBubbleIcon />
        <SettingIcon/>
        <img src="https://avatarmaker.net/images/1.png" alt="avatar1" className="nav-avatar"/>
      </div>
    </nav>
  );
}
export default Navbar;



