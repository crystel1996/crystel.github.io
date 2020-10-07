/* eslint-disable */
import React from 'react';
import useCollapse from '../hook/useCollapse.js';
import useResize from '../hook/useResize.js';
import useScroll from '../hook/useScroll.js';
import {NAVLINKS} from '../data/data.js';
import Logo from './Logo.js';

const NavLink = ({href,text,collapse}) => {
    
    return <li>
        <a href={"/#"+href} className={window.location.hash == '#'+href ? ' active' : ''} onClick={collapse}>{text}</a>
    </li>
}

const NavMenu = ({menus, isCollapsed, collapse, className}) => {
    const width = useResize(window.innerWidth);    
    let link = [];
    let isCollapse = 'nav-collapse';
    let styleWidth = '';

    menus.forEach(menu =>  {
        link.push(<NavLink href={menu.href} text={menu.text} key={menu.href} collapse={collapse} />)
    });
    
    if(isCollapsed && width < 992){
        isCollapse = '';
        styleWidth = '100%';
    }
    
    return <div className={isCollapse+" "+className} id="navigation-collapse" style={{width:styleWidth}}>
        <button className="nav-dropdown-close" onClick={collapse}>&times;</button>
        <div className="navigation-menu">
            <ul>
                {link}
            </ul>
        </div>
    </div>
}

const NavToggle = ({collapse}) => {
    
    return <div className="navigation-toggle">
        <button className="btn-theme btn-dark btn-radius nav-dropdown" onClick={collapse} data-target="#navigation-collapse">
            <i className="fas fa-bars"></i>
        </button>
    </div>
}

const Navbar = () => {
    const [collapsed,collapse] = useCollapse(false);
    
    return <nav className="navigation">
        <Logo type="image" value="logo.png" href="/#" />
        <NavToggle collapse={collapse} />
        <NavMenu  menus = {NAVLINKS} className="nav-dropdown-content" isCollapsed={collapsed} collapse={collapse} />
    </nav>
}

const ProgressScroll = ({currentHeight}) => {
    let width = (currentHeight / (document.body.offsetHeight - window.innerHeight)) * 100 + '%';

    return <div className="progress-scroll">
        <div id="progress-scroll-content" style={{width:width}}></div>
    </div>
}
    
const Navigation = () => {
    const currentHeight = useScroll(window.scrollY);
    return <React.Fragment>
        <ProgressScroll currentHeight = {currentHeight} />
        <Navbar />
    </React.Fragment>
}

export {Navigation,NavToggle,NavMenu};