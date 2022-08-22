import React from 'react';
import { BsList } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import getNavLinks from '../services/navLinks';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import adminlinks from '../services/adminLinks';


const Navbar = () => {

    const adminlink = adminlinks()
    const role = useSelector(state => state.userDetail.role)
    const Links = getNavLinks().filter(link => link.text !== 'ثبت نام / ورود')

    const openmenu = async () => {
        const menu = document.getElementById('menu');
        const gray = document.getElementById('gray-screen');
        menu.style.display = 'block'; gray.style.display = 'block';
        let i = 0
        for (let index = 0; index < 61; index++) {
            menu.style.transform = `translateX(${i--}vw)`;
            await sleep(1);
        }
        menu.style.display = 'block'; gray.style.display = 'block';
        function sleep(ms) {
            return new Promise(
                resolve => setTimeout(resolve, ms)
            );
        }
        menu.style.display = 'block'; gray.style.display = 'block';

    }
    const closemenu = async () => {
        const menu = document.getElementById('menu');
        const gray = document.getElementById('gray-screen');
        const closer = document.getElementById('close-menu');
        const Spinning = [
            { transform: 'rotate(0)' },
            { transform: 'rotate(-90deg)' },
            { transform: 'rotate(360deg)' }
        ];
        const Timing = {
            duration: 1000,
            iterations: 1,
        }
        closer.animate(Spinning, Timing);
        gray.style.display = 'none'
        let i = 0
        for (let index = 0; index < 61; index++) {
            menu.style.transform = `translateX(-${i--}vw)`;
            await sleep(35);
        }
        function sleep(ms) {
            return new Promise(
                resolve => setTimeout(resolve, ms)
            );
        }
        menu.style.display = 'none'

    }



    return (
        <React.Fragment>
            <BsList className='menu-icon' onClick={openmenu} />
            <div className='gray-screen' id='gray-screen'></div>
            <div className='menu' id='menu'>
                <BsXLg className='close-menu' id='close-menu' onClick={closemenu} />
                <p className='app-title'>اَپلیکیشن ساز</p>
                <hr style={{ width: '80%', marginRight: '10%' }}></hr>

                <ul className="mynav nav flex-column">
                    {(() => {
                        if (role === 'admin') {
                            return adminlink.map(nav => (
                                <li className="nav-item" key={nav.id}>
                                    <Link className="nav-link" to={nav.link} onClick={closemenu}>
                                        <span className={nav.icon + " nav-link-icon"} />
                                        <span className="nav-link-text">{nav.text}</span>
                                    </Link>
                                </li>
                            ))

                        }
                        else if (role === 'user') {
                            return <li className="nav-item" key='admin-dash'>
                                <Link className="nav-link" to='admin/dashboard' onClick={closemenu}>
                                    <span className={"fa fa-book nav-link-icon"} />
                                    <span className="nav-link-text">داشبورد</span>
                                </Link>
                            </li>
                        }
                        else if (role === 'client') {
                            return Links.map(nav => (
                                <li className="nav-item" key={nav.id}>
                                    <Link className="nav-link" to={nav.link} onClick={closemenu}>
                                        <span className={nav.icon + " nav-link-icon"} />
                                        <span className="nav-link-text">{nav.text}</span>
                                    </Link>
                                </li>
                            ))

                        }
                    })()}
                </ul>

            </div>
        </React.Fragment >
    );
}





export default Navbar;
