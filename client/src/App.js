import React from "react";
import {Helmet} from 'react-helmet';
import {Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'; 
import './App.css';
import About from "./About"
import Nav from "./Nav"
import Home from "./Home"

function App() {

    return (
        <div className="App">
            <Helmet bodyAttributes={{style: 'background-color : #e3f2fd'}}/>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}

export default App;