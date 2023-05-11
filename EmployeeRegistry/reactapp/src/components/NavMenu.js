import React from 'react';
import { Link } from 'react-router-dom';
import "./NavMenu.css";

const NavMenu = () => {
    return (
        <div className="nav-menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/employees">Employees</Link>
                    </li>
                    <li>
                        <Link to="/organizationalunits">Organizational Units</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavMenu;