/* eslint-disable */
import React from 'react';
import {useRef,useLayoutEffect} from 'react';
import {showAnimationOpacity} from '../Function/Function.js';

const PictureProfile = ({image,alternative}) => {
    return <img src={require("./../images/"+image)} alt={alternative} />
}

const HomeAction = () => {
    const refProfilePicture = useRef(null);  
    useLayoutEffect(() => {
        const item = refProfilePicture.current;
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
    return <div className="home-action" id="home">
        <div className="text-action"> 
            <h1>Bonjour,
            Je suis <span>Harimanana Ratsimbazafy</span>, un développeur web PHP full-stack</h1>
            <a href="/#contact">
                <button className="btn-theme btn-dark">
                    Demander un devis
                </button>  
            </a>
        </div>
        <div className="home-user-profile white-bg" id="user-profile" ref={refProfilePicture} data-animating="false">
            <PictureProfile image="profile.jpg" alternative="Profile" />
        </div>
    </div>
}

export default HomeAction;