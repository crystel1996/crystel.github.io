/* eslint-disable */
import React from 'react';
import useModal from '../hook/useModal.js';
import {ellipsis} from '../Function/Function.js';
import Modal from '../component/Modal.js';


const PortfolioItem = ({image,title}) => {
    const [isModal,display,modal] = useModal(false);
    const content = {
        img:<img src={require("./../images/"+image.link)} alt={image.alternative} />,
        title:title.text,
        content: title.content,
        link:title.link
    }
    
    return <React.Fragment>   
        <div className="project-item"> 
            {content.img}
            <div className="project-about">
                <h3>
                    <a href={title.link} target="_blank">{content.title}</a>
                </h3>
                <p>{ellipsis(content.content)}</p>
                <button className="btn-theme btn-black modal-show" onClick={modal} data-target="modal">Voir en détails</button>
            </div>
        </div>
        {isModal && 
            <div className="block-modal"> 
                <Modal modal={modal} display={display} content={content} />
            </div> 
        } 
    </React.Fragment> 
}

const Portfolio = ({portfolios}) => {
    let item = [];
    
    portfolios.forEach(portfolio => {
        item.push(
                <PortfolioItem  image={portfolio.image} title={portfolio.title} key={portfolio.key} />
        );
    });        


    return <div className="project-content">  
                {item}
    </div>
}

export default Portfolio;