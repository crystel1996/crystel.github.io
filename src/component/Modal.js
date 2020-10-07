/* eslint-disable */
import React from 'react';

const Modal = ({modal,display,content}) => {
    
    return <div className="modal" id="modal" style={{display:display}}>
        <div className="modal-content">
            <div className="modal-title">
                <h3>{content.title}</h3>
                <button className="modal-close" onClick={modal}>&times;</button>
            </div>
            <div className="modal-body">
                <div className="modal-content-img">
                    {content.img}
                </div>
                <div className="modal-content-text">
                    <p>{content.content}</p> 
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn-theme btn-dark modal-close" onClick={modal}>Fermer</button>
            </div>
        </div>
    </div> 
}

export default Modal;