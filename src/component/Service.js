/* eslint-disable */
import React from 'react';


const ServicesItem = ({title}) => {
    
    return <div className="services-item">
                <h3>{title.text}</h3>
                <p>{title.content}</p>
        </div>
}

const Services = ({services}) => {
    let item = [];
    services.forEach(service => {
        item.push(
            <ServicesItem title={service.title} key={service.title.key} />
        );
    });
    return <div className="services-content">
        {item}
    </div>
}

export default Services;