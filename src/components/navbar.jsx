import React from 'react';
import getNavLinks from '../services/navLinks';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import adminlinks from '../services/adminLinks';
import { slide as Menu } from 'react-burger-menu';

const Navbar = () => {

    const adminlink = adminlinks()
    const role = useSelector(state => state.userDetail.role)
    const Links = getNavLinks().filter(link => link.text !== 'ثبت نام / ورود')



    var styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '18px',
            height: '15px',
            right: '22px',
            top: '17px'
        },
        bmBurgerBars: {
            background: '#9936f5',
            borderRadius:'100px'
        },
        bmBurgerBarsHover: {
            background: '#888'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#9936f5',
            borderRadius:'10px'
        },
        bmMenuWrap: {
            position: 'fixed',
            top: 0,
            height: '100%'
        },
        bmMenu: {
            background: '#fff',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)',
            top: 0,
            right: 0
        }
    }

    return (
        <React.Fragment>
            <Menu className='newmenu' styles={styles} right >
                <p className='app-title' style={{ color: 'black', fontSize: '15px', marginRight: '9%' }}>اَپلیکیشن ساز</p>
                <hr style={{ width: '80%', marginRight: '10%', marginTop: '0' }}></hr>

                <ul style={{ marginTop: '-3vh', marginRight: '2vw' }} className="mynav nav flex-column">
                    {(() => {
                        if (role === 'admin') {
                            return adminlink.map(nav => (
                                <li className="nav-item" key={nav.id}>
                                    <Link className="nav-link" to={nav.link} >
                                        <span className={nav.icon + " nav-link-icon"} />
                                        <span className="nav-link-text">{nav.text}</span>
                                    </Link>
                                </li>
                            ))

                        }
                        else if (role === 'user') {
                            return <li className="nav-item" key='admin-dash'>
                                <Link className="nav-link" to='admin/dashboard' >
                                    <span className={"fa fa-book nav-link-icon"} />
                                    <span className="nav-link-text">داشبورد</span>
                                </Link>
                            </li>
                        }
                        else if (role === 'client') {
                            return Links.map(nav => (
                                <li className="nav-item" key={nav.id}>
                                    <Link className="nav-link" to={nav.link} >
                                        <span className={nav.icon + " nav-link-icon"} />
                                        <span className="nav-link-text">{nav.text}</span>
                                    </Link>
                                </li>
                            ))

                        }
                    })()}
                </ul>
            </Menu>

        </React.Fragment >
    );
}





export default Navbar;
