import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ handleLogout }) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar' style={{zIndex:"10000",height:"10vh"}}>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                StarStream
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/galaxy'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Galaxy
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/stream'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Stream
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
