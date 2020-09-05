import React from 'react';
import './Navbar.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const Navbar = () => {
    return (
        <Breadcrumbs className="navbar">
            <Link color="inherit" href="home" >
                Home
            </Link>
            <Link color="inherit" href="#" >
                Blog
            </Link>
            <Link color="inherit" href="#" >
                Notification
            </Link>
        </Breadcrumbs>
    );
};

export default Navbar;