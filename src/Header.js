import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header({active}) {

    return (
        <div>
            <h1 style={{fontSize:"3rem"}}>{active ? "hi":""}</h1>
            <Link to="/about">Go somewhere</Link>
        </div>
    )
}
