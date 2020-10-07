/* eslint-disable */
import React from 'react';
import {useRef,useLayoutEffect} from 'react';
import {progressSkill} from '../Function/Function.js';

const SkillItem = ({image,title,progress}) => {
    const refSkillValue = useRef(null);
    const offset = 100;
    useLayoutEffect(() =>{
        const element = refSkillValue.current;
        let width = parseFloat(element.dataset.value);
        let parent = element.offsetParent;
        let initWidth = 0;

        width = Number.isNaN(width) ? 0 : width;
        width = width > 100 ? 100 : width;
        element.dataset.sliding = 'false';
        const onProgress = () => {
            progressSkill(element,offset,parent,width,initWidth);
        }
        window.addEventListener("scroll",onProgress);
            return () => {
            window.removeEventListener("scroll",onProgress);
        }
    },[]);
    
    return <div className="skill-item">
            <div className="skill-img">
                <img src={require("./../images/"+image.link)} alt={image.alternative} />
            </div>
            <div className="skill-about">
                <h3>{title.text}</h3>
                <div className="progress-skill">
                    <div className="progress-value" ref={refSkillValue} data-value={progress}></div>
                </div>
            </div>
    </div>
}

const Skill = ({skills}) => {
    let item = [];
    skills.forEach(skill => {
        item.push(
            <SkillItem image={skill.image} title={skill.title} progress={skill.progress} key={skill.key} />
        );
    });
    return <div className="skill-content">
        {item}
    </div>
}

export default Skill;