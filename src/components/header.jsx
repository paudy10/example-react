import React from 'react';
import { BsBoxArrowInRight } from "react-icons/bs";
import Navbar from "./navbar"
import '../css/header.css';
import { Link } from "react-router-dom";
import '../css/variable.css';
import getNavLinks from '../services/navLinks';
import { useDispatch, useSelector } from 'react-redux';
import { logOutOfAccountAction } from '../userDetailSlice';



const Header = () => {

    const dispatch = useDispatch();
    const Links = getNavLinks()
    const role = useSelector(state => state.userDetail.role)
    return (
        <div className='header' >
            <span className='title'><Navbar role={role} className='menu' title='فروشگاه گیاهان دارویی' /> <Link to='/' className='nolinkdecoration header-title blacktext' >عطار خونه</Link> </span>
            <span className='d-inline inline-menu' style={{ marginTop: '2.5vh', marginRight: '3vw' }}>
                {Links.map(nav => (
                    <Link key={nav.id} className="nav-link-items" to={nav.link}>
                        <span className="nav-link-text desklinks">{nav.text === 'ثبت نام / ورود' ? '' : nav.text}</span>
                    </Link>
                ))}
                {(() => {
                    if (role === 'user') {
                        return <Link key='user-dash' className="nav-link-items" to='/dashboard'>
                            <span className="nav-link-text desklinks">داشبورد</span>
                        </Link>
                    }
                    else if (role === 'admin') {
                        return <Link key='admin-dash' className="nav-link-items" to='admin/dashboard'>
                            <span className="nav-link-text desklinks">داشبورد</span>
                        </Link>
                    }
                })()}
            </span>



            {role !== 'client' ? <Link to='/login' onClick={() => dispatch(logOutOfAccountAction())} id='log' className='login' > <BsBoxArrowInRight className='login-icon' />خروج</Link> : < Link to='/login' id='log' className='login' > <BsBoxArrowInRight className='login-icon' />ورود</Link>}

        </div >)
}


export default Header;
