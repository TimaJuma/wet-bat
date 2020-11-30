import React from "react";
import clsx from "clsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import "./SideMenuBar.scss"

import SideMenu from "./SideMenu";

import HomePage from "../main/home/HomePage"
import QuotesPage from "../main/quotes/QuotesPage"


const PageClients = () => (
  <Typography variant="h3" component="h1">
    List of customers
  </Typography>
);
const PageReports = () => (
  <Typography variant="h3" component="h1">
    List of Tours
  </Typography>
);

const SideMenuBar = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={clsx("App", classes.root)}>
      {/* <div className="sidebar-container"> */}
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <SideMenu />
        </Drawer>
        <main className="main-content">
          <Container maxWidth="lg" className="sidebar-container">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/quotes" component={QuotesPage} />
              <Route path="/clients" component={PageClients} />
              <Route path="/reports" component={PageReports} />
            </Switch>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    // display: "flex",
    // flexDirection: "column",
    // whiteSpace: "nowrap",
    width: drawerWidth,
    height : "100vh",
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
    background: "#e7f0c3",
    color: "#5f6caf",
  },
  // content: {
  //   flexGrow: 1,
  //   height: "100vh",
  //   overflow: "auto",
  // },
  // container: {
  //   paddingTop: theme.spacing(4),
  //   paddingBottom: theme.spacing(4),
  // },
}));

export default SideMenuBar;