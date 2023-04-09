import React from "react";
import MyInfo from "./components/MyInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";

const App = () =>{
    return (
        <div>
            <Navbar ></Navbar>
            <MainComponent></MainComponent>
            <Footer></Footer>
        </div>
    )
}

export default App