import React from 'react';
import './Navbar.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/home">Home</a>
            <a href="#">Blog</a>
            <a href="#">Notification</a>
        </div>
    );
};

export default Navbar;