import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Navbar = (props) => {

    Navbar.defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
    return (

        <nav className="navbar badge-dark">
            <h1>
                <i className={props.icon}/>
                {props.title}
            </h1>

            <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link className="nav-link " to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <Link className="nav-link " to="/about">About</Link>
                </li>
            </ul>


        </nav>
    );
}

export default Navbar;
