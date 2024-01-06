import React, { Component } from 'react';
import './PropertyAdd.css';

class PropertyAdd extends Component {

  constructor(props) {
    super(props);
    this.state = { 
                    propertyName: this.props.propertyName, 
                    address: this.props.address,
                    description: this.props.description,
                    squalorIndex: this.props.squalorIndex,
                    propertyId: this.props.propertyId,
                    submitHandler: this.props.submitHandler 
                  };

    this.handlePropertyNameChange = this.handlePropertyNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSqualorChange = this.handleSqualorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePropertyNameChange(event) { 
    this.setState({ propertyName: event.target.value }); 
  }

  handleAddressChange(event) { 
    this.setState({ address: event.target.value }); 
  }

  handleDescriptionChange(event) { 
    this.setState({ description: event.target.value }); 
  }

  handleSqualorChange(event) { 
    this.setState({ squalorIndex: event.target.value }); 
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.submitHandler(this.state.propertyName, this.state.address, this.state.description, this.state.squalorIndex, this.state.propertyId );
  }

  handleClickAway(event) {
    
  }

  render() {
    return (
      <div className="popup">
        <form onSubmit={this.handleSubmit} className="popup_inner">
        <table>
          <tr>
            <td><label htmlFor="propertyNameInput">Property Name:</label></td>
            <td><input id="propertyNameInput" type="text" value={this.state.propertyName} onChange={this.handlePropertyNameChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="addressInput">Address: </label></td>
            <td><input id="addressInput" type="text" value={this.state.address} onChange={this.handleAddressChange}/></td>
          </tr>
          <tr>
            <td><label htmlFor="descriptionInput">Description:</label></td>
            <td><input id="descriptionInput" value={this.state.description}  onChange={this.handleDescriptionChange} /></td>
          </tr>
          <tr>
            <td><label htmlFor="squalorInput">Squalor Index: </label></td>
            <td><input id="squalorInput" value={this.state.squalorIndex}  onChange={this.handleSqualorChange} /></td>
          </tr>
        </table>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default PropertyAdd;