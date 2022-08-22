import React from 'react';
import adminLinks from '../../../services/adminLinks';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const adminLink = adminLinks()

    return (
        <ul className="admin-nav nav flex-column">
            {adminLink.map(nav => (
                <li className="nav-item" key={nav.id}>
                    <Link className="nav-link" to={nav.link}>
                        <span className="nav-link-text"><span className='crc'></span>{nav.text}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Navbar;