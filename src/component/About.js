/* eslint-disable */
import React from 'react';
import {useRef, useLayoutEffect} from 'react';
import {transformRect} from '../Function/Function.js';


const AboutItem = ({title,location}) => {
    const refAbout = useRef(null);
    
    useLayoutEffect(() => {
        const element = refAbout.current;
        const parent = element.offsetParent;
        element.dataset.transform = 'false';

        if(element.classList.contains('left')){
            element.dataset.translate = 'left';
        }
        if(element.classList.contains('right')){
            element.dataset.translate = 'right';
        }
        const onTranslateX = () => {
            transformRect(element,parent);
        }
        window.addEventListener("scroll",onTranslateX);
        return () => {
            window.removeEventListener("scroll",onTranslateX);
        }
    },[]);
    return <div className={"about-item "+location} ref={refAbout}>
        <div className="about-item-content"> 
            <h3>
                {title.year}
                <span>{title.text}</span>
            </h3>
            <p>{title.content}</p>
        </div>
    </div>
}

const About = ({abouts}) => {
    let item = [];
    let location = 'left';
    let i = 0;
    abouts.forEach(about => {
        location = i % 2 == 0 ? 'left' : 'right';
        item.push(
            <AboutItem title={about.title} location={location} key={about.key} />
        );
        i++;  
    });
    return <div className="about-content">
        {item}
    </div>
}

export default About;