import React, { } from "react";

import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputAdornment from "@material-ui/core/InputAdornment"

import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import NotificationsIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
import SettingIcon from "@material-ui/icons/Settings"
import ViewCompactIcon from "@material-ui/icons/ViewCompact"
// import axios from "axios";

// import { Link } from "react-router-dom";
import "./Navbar.scss";
// import LoginModal from "./Login";
// import Logout from "./Logout";




const Navbar = () => {

//   useEffect(() => {
//     axios.get("/users/me").then((res) => {
//       let name = "";
//       if (res.data.user) {
//         if (res.data.user.first_name) name = res.data.user.first_name;
//         else name = res.data.user.name;
//       }
//       setUserI(name);
//       setLogStatus(true);
//     });
//   }, []);
  return (
    <nav className="nav">
      {/* <div>
        <Link className="navigation-logo" to="/">
        </Link>
      </div>
      <Link to="/signup"></Link> */}
      <div>
      <ViewCompactIcon fontSize="large"/>
      </div>
      <div className="nav-right_items">
        <OutlinedInput
              id="outlined-adornment-weight"
              // value={values.weight}
              // onChange={handleChange('weight')}
              startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
        <NotificationsIcon color="primary" />
        <ChatBubbleIcon className="nav-icon"/>
        <SettingIcon/>
        <img src="https://avatarmaker.net/images/1.png" alt="avatar1" className="nav-avatar"/>
      </div>
    </nav>
  );
}
export default Navbar;



