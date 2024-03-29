import React, { Component } from 'react';
import Property from './views/Property';
import PropertyUpdate from './views/PropertyUpdate';
import PropertyController from './controllers/PropertyController';

class PropertyList extends Component {

    /*
    state = {
        properties: [
          {propertyName: "Ducksworth Landing", address: "432 Hinterlands Dr.", description: "Quick access to thiccc ducks", squalorIndex: "Fine imported breads and cheeses", propertyId:"1A"},
          {propertyName: "Pilgrim Estates", address: "753 Sacajewea Dr.", description: "Plymouth Rock landed on savings", squalorIndex: "smallpox infested blankets", propertyId:"2B"},
          {propertyName: "The Trap", address: "323 Martin Luther King Blvd.", description: "Great neighborhood for jogging", squalorIndex: "some racist BS", propertyId:"3C"},
        ],
        updateModalVisible: false,
        selectedProperty: 0
    }
    */

    //setup property list
    controller = new PropertyController();
    state = {
        properties : new PropertyController().getProperties(),
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

    handleUpdateSubmit = (updatedProperty) =>{
        const propertiesList = [...this.state.properties];
        var currentProperty = this.controller.retrieveProperty(updatedProperty.propertyID);
        if(currentProperty){
            currentProperty = updatedProperty;
        }
        var visibility = !this.state.updateModalVisible;
        this.setState({
            updateModalVisible: visibility
        });
    }


    render() { 

        let updateModal = null;

        if (this.state.updateModalVisible){
            updateModal = (
                <PropertyUpdate
                //propertyId={this.state.selectedProperty.propertyId} 
                //propertyName = {this.state.selectedProperty.propertyName}
                //address = {this.state.selectedProperty.address}
                //description = {this.state.selectedProperty.description}
                //squalorIndex= {this.state.selectedProperty.squalorIndex}
                property={this.state.selectedProperty}
                onClickAway={this.setUpdateModalVisible}
                submitHandler={this.handleUpdateSubmit}
            >
                {this.state.selectedProperty}
            </PropertyUpdate>
            );
        }

        return (
            <div>
                
                <table>
                    <tbody>
                    <tr>
                        <td>{this.state.properties.map((property)=>
                            <Property 
                                propertyName={property.propertyName} 
                                address={property.address} 
                                key={property.propertyID}
                                description={property.description}
                                squalorIndex={property.squalorIndex}
                                imageURL={property.imageURL}
                            >
                            <button onClick={e =>this.setUpdateModalVisible(property)}>Update Property</button>
                            </Property>)}
                            
                        </td>
                    </tr>
                    </tbody>
                </table>
                {updateModal}
            </div>
        );
    }

}
export default PropertyList;