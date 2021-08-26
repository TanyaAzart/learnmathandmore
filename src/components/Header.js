import React from 'react';
import DropDownMenu from './DropDownMenu';
import Link from './Link';

const Header =({onTitleClick})=>{
    
    return (
    <header className='header'>
        <nav>
            <input type="checkbox" id="mobile-menu" className="mobile-menu-check"/>
            <label htmlFor="mobile-menu" className="show-mobile-menu">Menu</label>
            <ul className="header-nav nav-links">
                <li><Link href="/">Главная</Link></li>
                <li><Link href="/about">Об авторе</Link></li>
                <li><Link href="/gallery">Галерея</Link></li>
                <li className="dropdown">
                <Link className="drop-trigger" href="/blog">Блог</Link>
                <DropDownMenu onTitleClick={onTitleClick}/>   
                </li>
                <li><Link href="/info">Инфо</Link></li>
            </ul>
        </nav>
    </header>     
    )
};

export default Header;