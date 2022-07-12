import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Temp from "./Temp";

function App() {
    return (
        <>
        <NavLink to="/">/</NavLink>
        <br/>
        <br/>
        <NavLink to="/a">/a</NavLink>
        <br/>
        <br/>
        <NavLink to="/b">/b</NavLink>
        <br/>
        <br/>
        <NavLink to="/c">/c</NavLink>
        <br/>
        <br/>
        <NavLink to="/d">/d</NavLink>
        <br/>
        <br/>
        <NavLink to="/e">/e</NavLink>
        <br/>
        <br/>
            <Routes>
                <Route exact path="/" element={<Temp string="i am home page  "/>}/>
                <Route exact path="/a" element={<Temp string="i am a page  "/>}/>
                <Route exact path="/b" element={<Temp string="i am b page  "/>}/>
                <Route exact path="/c" element={<Temp string="i am c page  "/>}/>
                <Route exact path="/d" element={<Temp string="i am d page  "/>}/>
                <Route exact path="/e" element={<Temp string="i am e page  "/>}/>
            </Routes>
            <div className="">

            </div>
            <label htmlFor=""></label>
        </>
    );
}


export default App
