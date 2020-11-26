import React from "react";

// import './App.css';
import HomePage from "./components/main/home/HomePage"
import Navbar from "./components/navbar/Navbar"
import QuotesView from "./components/main/quotes/QuotesView"
import SideMenuBar from "./components/sidemenu/SideMenuBar"


const App = () => {
  return (
    <>
    <Navbar/>
    {/* <SideMenuBar /> */}
    <HomePage/>
    <QuotesView/>
    </>
  );
}

export default App;
