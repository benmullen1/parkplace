
class Property {
    propertyName;
    address;
    description;
    squalorIndex;
    propertyID;
    imageURL;

    //constructor();
    constructor (propertyID, propertyName, address, description, squalorIndex, imageURL){
     //if we don't pass in PropertyID, it is up to the caller to make sure an ID is generated. 
     //This will be handled by the service
     //while initializing any Property objects created through itself.
        this.propertyID = (!propertyID) ? "": propertyID;
        this.propertyName = (!propertyName) ? "" : propertyName;
        this.address = (!address) ? "" :  address;
        this.description = (!description) ? "" : description;
        this.squalorIndex = (!squalorIndex) ? "" : squalorIndex;
        this.imageURL = (!imageURL) ? "" : imageURL;
    }
    
} export default Property