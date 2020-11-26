import React from "react";
import clsx from "clsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import SideMenu from "./SideMenu";


const PageDashboard = () => (
  <Typography variant="h3" component="h1">
    {/* <Login /> */} HOME
  </Typography>
);
const PageOrders = () => (
  <Typography variant="h3" component="h1">
    Page to Add Clients
  </Typography>
);
const PageClients = () => (
  <Typography variant="h3" component="h1">
    List of customers
  </Typography>
);
const PageReports = () => (
  <Typography variant="h3" component="h1">
    Reports Page
  </Typography>
);

const SideMenuBar = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={clsx("App", classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <SideMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route path="/" exact component={PageDashboard} />
              <Route path="/addclient" component={PageOrders} />
              <Route path="/clients" component={PageClients} />
              <Route path="/reports" component={PageReports} />
            </Switch>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: "#535454",
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default SideMenuBar;