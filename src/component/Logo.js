/* eslint-disable */
import React from 'react';

const Logo = ({type, value, href}) => {
    let logo = '';
    if(type == "text") {
        logo = value;
    }
    if(type == "image") {
        logo = <img src={require('./../images/'+value)} alt="Logo"/>;
    }
    return <div className="navigation-logo">
        <a href={href}>{logo}</a>
    </div>
}

export default Logo;