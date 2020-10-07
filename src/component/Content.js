/* eslint-disable */
import React, { useRef, useLayoutEffect } from 'react';

import {ContextSection} from '../Context/Context.js';
import {ABOUTS,PORTFOLIOS,LISTSERVICES,LISTSKILL} from '../data/data.js';
import {showAnimationOpacity} from '../Function/Function.js';

import HomeAction from './Action.js';
import Skill from './Skill.js';
import Services from './Service.js';
import Portfolio from './Portfolio.js';
import About from './About.js';
import Contact from './Contact.js';


const SectionWithContext = ({className, id, title, children}) => {
    const ref = useRef(null);
    useLayoutEffect(() => {
        const item = ref.current;
        const topPos = element => element.getBoundingClientRect().top;
        const elementPos = topPos(item);
        const onScroll = () => {
            showAnimationOpacity(item,elementPos);
        }
        window.addEventListener("scroll",onScroll);
        return () => {
            window.removeEventListener("scroll",onScroll);
        }

    },[]);
    return <ContextSection.Provider>
        <section className={className} ref={ref} id={id} data-animating="false">
            <div className="section-title">
                <h2>{title.text}</h2>
                <p>{title.content}</p>
            </div>
            {children}
        </section>
    </ContextSection.Provider>
}

const Content = () => {
    
    return <React.Fragment>
        <HomeAction />
        
        <SectionWithContext
            className="about" id="about" title={{text:"A propos", content:"Je suis un développeur web freelance ayant un diplôme universitaire et passionné sur ce domaine. Je suis disponible pour la création et le développement de votre site internet en utilisant mes compétences."}}
        >
            <About  abouts={ABOUTS} />
        </SectionWithContext>

        <SectionWithContext 
            className="skill white-bg" id="skill" title={{text:"Compétences",content:"Mes propres compétences pour réaliser votre projet."}}
        >
            <Skill skills={LISTSKILL} />
        </SectionWithContext>
        
        <SectionWithContext
            className="services" id="services" title={{text:"Services", content:"Mes services proposés pour votre projet."}}
        >
            <Services services={LISTSERVICES}/>
        </SectionWithContext>

        <SectionWithContext
            className="project theme-bg" id="portfolio" title={{text:"Portfolio", content:"Liste des quelques projets réalisés ."}}
        >
            <Portfolio portfolios={PORTFOLIOS} />
        </SectionWithContext >

        <SectionWithContext
            className="contact bg-img" id="contact" title={{text:"Mes contacts", content:"Liste des contacts pour me contacter."}}
        >
            <Contact />
        </SectionWithContext>

    </React.Fragment>
}

export default Content;