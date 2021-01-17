import React, { Component } from 'react';
import Property from './Property/Property';
import PropertyUpdate from './Property/PropertyUpdate';

class PropertyList extends Component {

    state = {
        properties: [
          {propertyName: "Ducksworth Landing", address: "432 Hinterlands Dr.", description: "Quick access to thiccc ducks", squalorIndex: "Fine imported breads and cheeses", propertyId:"1A"},
          {propertyName: "Pilgrim Estates", address: "753 Sacajewea Dr.", description: "Plymouth Rock landed on savings", squalorIndex: "smallpox infested blankets", propertyId:"2B"},
          {propertyName: "The Trap", address: "323 Martin Luther King Blvd.", description: "Great neighborhood for jogging", squalorIndex: "some racist BS", propertyId:"3C"},
        ],
        updateModalVisible: false,
        selectedProperty: 0
    }

    setUpdateModalVisible = (property)=>{
        var visibility = !this.state.updateModalVisible;
        this.setState({
            updateModalVisible: visibility,
            selectedProperty: property
        });
    }

    handleUpdateSubmit = (name, address, description, squalorIndex, id) =>{
        let properties = this.state.properties;
        let property = properties.find(property => property.propertyId === id);
        property.propertyName = name;
        property.address = address;
        property.description = description;
        property.squalorIndex = squalorIndex;
        //properties.find(property => property.propertyId === id) = property;
        this.setState({
            properties: properties,
            updateModalVisible: false
        });
    }


    render() { 
        return (
            <div>
                
                <table>
                    <tbody>
                    <tr>
                        <td>{this.state.properties.map((property)=>
                            <Property 
                                propertyName={property.propertyName} 
                                address={property.address} 
                                key={property.propertyId}
                                description={property.description}
                                squalorIndex={property.squalorIndex}
                            >
                            <button onClick={e =>this.setUpdateModalVisible(property)}>Update Property</button>
                            </Property>)}
                            
                        </td>
                    </tr>
                    </tbody>
                </table>
                {this.state.updateModalVisible && 
                    <PropertyUpdate
                        className="container"
                        propertyId={this.state.selectedProperty.propertyId} 
                        propertyName = {this.state.selectedProperty.propertyName}
                        address = {this.state.selectedProperty.address}
                        description = {this.state.selectedProperty.description}
                        squalorIndex= {this.state.selectedProperty.squalorIndex}
                        onClickAway={this.setUpdateModalVisible}
                        submitHandler={this.handleUpdateSubmit}
                    >
                        {this.state.selectedProperty}
                    </PropertyUpdate>
                }


            </div>
        );
    }

}
export default PropertyList;