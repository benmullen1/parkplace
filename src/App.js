import React, { Component } from 'react';
import Property from './model/Property';
import PropertyList from './PropertyList';
import PropertyUpdate from './views/PropertyUpdate';

class App extends Component {

  state = {
    updateModalVisible: false
  }

  setUpdateModalVisible = ()=>{
    var visibility = !this.state.updateModalVisible;
    if (visibility){
      let newProperty = new Property();
      this.setState({
          updateModalVisible: visibility,
          selectedProperty: newProperty
      });
    }
    else{
      this.setState({
        updateModalVisible: visibility,
        selectedProperty: null
    });
    }
  }

  handleUpdateSubmit = (property) =>{
    const properties = [...this.state.properties];

    let propertyIndex = properties.findIndex(property => property.propertyId === id);
    if (propertyIndex === -1){
      property = properties.push(property);
    }
    else {
      //somehow is already in list
      properties[propertyIndex] = property;
    }

    this.setState({
        properties: properties,
        updateModalVisible: false
    });
}

  handleExperiments(event){

  }

  render() {

    let updateModal = null;

    if (this.state.updateModalVisible){
        updateModal = (
            <PropertyUpdate
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
        );
    }

    return (
      <div className="app">
        <h1>Park Place Management</h1>
        <div className="two.columns">
          <PropertyList></PropertyList>
        </div>
        <div className="two.columns">
          <button onClick={e =>this.setUpdateModalVisible()}>Add Property</button>
        </div>
        <div>
          <h3>Experimental Features</h3>
          <button onClick={this.handleExperiments}>Experiment</button>
        </div>

      </div>
    );
  }
}

export default App;
