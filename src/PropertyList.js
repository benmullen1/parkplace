import React, { Component } from 'react';

class PropertyList extends Component {

    PropertyName = "Mallard Lakes";
    Address = "123 Fake Street";
    Description = "Good Place to Live";

    render() {
        return (
            <div>
                <ul>
                    <li>{this.PropertyName}</li>
                    <ul>
                        <li>Address: {this.Address}</li>
                        <li>Description: {this.Description}</li>
                    </ul>
                </ul>
            </div>
        );
    }

}
export default PropertyList;