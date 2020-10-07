/* eslint-disable */
import React from 'react';

const Alert = ({handleClose,children,variant = "default"}) => {
    return <div className={"alert alert-"+variant}>
        <div className="alert-content">
            {children}
        </div>
        <div className="alert-close" onClick={handleClose}>&times;</div>
    </div>
    
}

export default Alert;