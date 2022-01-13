import React from 'react';
import "./nav.css";
import {Link} from "react-router-dom";

function Navbar(){

    return (
        <div className="nav_container">
            <div className="inside_nav">
                <div className="Home">
                    <Link to="/">
                    Home
                    </Link>
                    </div>
                <div className="items">
                <div className="sign" >
                <Link to="/signin">
                
                    Sign in
                    </Link>
                    </div>
                <div className="login1">
                <Link to="/login" >
                    Login
                </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;