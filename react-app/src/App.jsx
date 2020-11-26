import React from "react";

// import './App.css';
import HomePage from "./components/main/home/HomePage"
import Navbar from "./components/navbar/Navbar"
import QuotesPage from "./components/main/quotes/QuotesPage"
import SideMenuBar from "./components/sidemenu/SideMenuBar"


const App = () => {
  return (
    <>
    <Navbar/>
    <SideMenuBar />
    {/* <HomePage/>
    <QuotesPage/> */}
    </>
  );
}

export default App;
