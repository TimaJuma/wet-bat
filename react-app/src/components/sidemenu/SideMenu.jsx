import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import HomeIcon from "@material-ui/icons/Home";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import ListIcon from "@material-ui/icons/List";
import TelegramIcon from "@material-ui/icons/Telegram";


import SideMenuItem from "./SideMenuItem";

const sideMenuItems = [
  {
    name: "Home",
    link: "/",
    Icon: HomeIcon,
  },
  {
    name: "Quotes",
    link: "/quotes",
    Icon: MoneyIcon,
  },
  {
    name: "Leads",
    link: "/clients",
    Icon: ListIcon,
  },
  {
    name: "Tours",
    link: "/reports",
    Icon: TelegramIcon,
  }
];

const SideMenu = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      <SideMenuItem {...SideMenuItem[0]} />
      {sideMenuItems.map((item, index) => (
        <SideMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: "#97c05c",
    },
  })
);

export default SideMenu;