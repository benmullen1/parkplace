import React, { Component } from 'react';
import PropertyList from './PropertyList';

class App extends Component {

  state = {
    updateModalVisible: false
  }

  setUpdateModalVisible = ()=>{
    var visibility = !this.state.updateModalVisible;
    this.setState({
        updateModalVisible: visibility,
    });
  }

  handleAddPropertyClick(event){

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
      </div>
    );
  }
}

export default App;
