import React from 'react';
import Link from './Link';

const Footer =()=>{
    
    return <footer className='footer'>
            <nav>
                <ul className="footer-nav nav-links">
                    <li><Link href="/">Главная</Link></li>
                    <li><Link href="/about">Об авторе</Link></li>
                    <li><Link href="/gallery">Галерея</Link></li>
                    <li><Link href="/blog">Блог</Link></li>
                    <li><Link href="/info">Инфо</Link></li>
                </ul>
            </nav>        
         </footer>    
    
};

export default Footer;