import React, { Component } from 'react';
import Property from '../model/Property';
import './PropertyUpdate.css';

class PropertyUpdate extends Component {

  originalProperty;

  constructor(props) {
    super(props);
    this.state = {
      property: this.props.property,
      submitHandler: this.props.submitHandler
    };

    this.handlePropertyNameChange = this.handlePropertyNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSqualorChange = this.handleSqualorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.originalProperty = Object.assign({}, this.props.propertyName, this.props.address, this.props.description, this.props.squalorIndex, this.props.propertyId);
    
  }

  handlePropertyNameChange(event) {
    this.state.property.propertyName = event.target.value;
    this.setState({property: this.state.property});
  }

  handleAddressChange(event) {
    this.state.property.address = event.target.value;
    this.setState({property:  this.state.property});
  }

  handleDescriptionChange(event) {
    this.state.property.description = event.target.value;
    this.setState({property:  this.state.property});
  }

  handleSqualorChange(event) {
    this.state.property.squalorIndex = event.target.value;
    this.setState({property: this.state.property});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (event.value === "Submit"){
         this.state.submitHandler(this.state.property);
    }
    else{
      this.state.submitHandler(this.originalProperty);
    }
  }

  handleEsc(event) {
    if (event.keyCode === 27) {
      this.state.submitHandler(this.originalProperty);
    }
  }

  useEffect() {
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }


  render() {

    

    return (
      <div className="popup">
        <form onSubmit={this.handleSubmit} className="popup_inner">
          <table>
            <tr>
              <td><label htmlFor="propertyNameInput">Property Name:</label></td>
              <td><input id="propertyNameInput" type="text" value={this.state.property.propertyName} onChange={this.handlePropertyNameChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="addressInput">Address: </label></td>
              <td><input id="addressInput" type="text" value={this.state.property.address} onChange={this.handleAddressChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="descriptionInput">Description:</label></td>
              <td><input id="descriptionInput" value={this.state.property.description} onChange={this.handleDescriptionChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="squalorInput">Squalor Index: </label></td>
              <td><input id="squalorInput" value={this.state.property.squalorIndex} onChange={this.handleSqualorChange} /></td>
            </tr>
          </table>
          <input type="submit" value="Submit" />
          <input type="button" value="Cancel"/>
        </form>
      </div>
    );
  }
}

export default PropertyUpdate;