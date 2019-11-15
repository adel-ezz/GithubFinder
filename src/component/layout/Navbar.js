import React from 'react';
import PropTypes from 'prop-types';

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
        </nav>
    );
}

export default Navbar;
