import React from 'react';

const Property = (props) => {
    
    return (
        <div className="row">
        <div className="six columns">
            <p>{props.propertyName}</p>
            <ul>   
                <li>address: {props.address}</li>
                <li>description: {props.description}</li>
                <li>Squalor Index: {props.squalorIndex}</li>
            </ul>
            <p>{props.children}</p>
        </div>
        <div className="six columns">
            IMAGE PLACEHOLDER
        </div>
        </div>
    );

}

export default Property;