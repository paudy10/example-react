import React from 'react';
import userLinks from '../../../services/userLinks';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const userLink = userLinks()

    return (
        <ul className="admin-nav nav flex-column">
            {userLink.map(nav => (
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