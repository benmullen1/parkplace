import React from 'react';

const Property = (props) => {
    
    return (
        <div>
            <p>{props.propertyName}</p>
            <ul>   
                <li>address: {props.address}</li>
                <li>description: {props.description}</li>
                <li>Squalor Index: {props.squalorIndex}</li>
            </ul>
            <p>{props.children}</p>
        </div>
    );

}

export default Property;