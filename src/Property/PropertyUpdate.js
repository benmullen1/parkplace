import React, { Component } from 'react';


class PropertyUpdate extends Component {

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Property Name:
          <input type="text" value={this.state.propertyName} onChange={this.handlePropertyNameChange}/></label>
        <ul>
          <li><label>Address: <input type="text" value={this.state.address} onChange={this.handleAddressChange}/></label></li>
          <li><label>Description: <input value={this.state.description}  onChange={this.handleDescriptionChange} /></label></li>
          <li><label>Squalor Index: <input value={this.state.squalorIndex}  onChange={this.handleSqualorChange} /></label></li>
        </ul>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PropertyUpdate;