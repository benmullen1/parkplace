import Property from '../model/Property';
import fileProps from '../model/properties.json';

class PropertyService{

    innerProperties = new Array(0);
    innerCurrentMaxID = -1;

    constructor(){

        //actually retrieve these from not a file later
        var retrievedProps = fileProps;
        
        if (this.innerProperties.length <= 0){
            this.innerProperties = new Array(retrievedProps.length);
        }

        retrievedProps.forEach(element => {
            if (!element.propertyId){
                console.log("Invalid ID while parsing properties listing JSON - " + element.toString());
                element.propertyId = "-1";
            }else{
                //if PropertyID is valid, keep track of the highest value encountered, we will use this later
                let id = Number.parseInt(element.propertyId);
                this.innerCurrentMaxID = (id > this.innerCurrentMaxID) ? id : this.innerCurrentMaxID;
            }
            let property = new Property(element.propertyId, element.propertyName, element.address, element.description, element.squalorIndex, element.imageURL);
            this.innerProperties.push(property);
        });
        //now we know the highest ID number, we can go back and fill in any empties in the list:
        this.innerProperties.forEach(element => {
            if (!element.propertyID || element.propertyID === "-1"){
                element.propertyID = this.generateID();
            }
        });
        
    }

    retrieveProperties() {
        if (this.innerProperties.length <= 0){
            this.constructor();
        }
        return this.innerProperties;
    }

    findProperty(propertyID_search){
        //this is needed because we can't use .find over a list that has lots of empty elements
        if (this.innerProperties.length <= 0){
            this.constructor();
        }
        this.innerProperties.forEach(property =>{
            if (!property){
                //continue
            }
            else{
                if (property.propertyID === propertyID_search){
                    return property;
                }
            }
        });
        return false;
    }

    storeProperty(property){
        let existingProp = this.innerProperties.find(element => (element.propertyID === property.propertyID));
        
        if (existingProp){
            existingProp = property;
        }else{
            this.innerProperties.push(property);
        }
        
        
    }

    generateID(){
        //naive implementation, add one to the highest ID in the list
        //ID's are constrained to be numeric
        //each generation of an ID burns the next identifier forever.

        if (this.innerCurrentMaxID === -1){
            this.innerProperties.sort(function(a, b){
                return Number.parseInt(a.propertyID) - Number.parseInt(b.propertyID);
            });
            this.innerCurrentMaxID = Number.parseInt(this.innerProperties[this.innerProperties.length-1].propertyID);
        }//shouldn't ever be -1 as long as some ID's were passed in during list building time/constructor

        PropertyService.innerCurrentMaxID++;
        return PropertyService.innerCurrentMaxID.toString();
    }

    generateNewProperty(){
        if (this.innerProperties.length <= 0){
            this.constructor();
        }
        let property = new Property();
        property.propertyID = this.generateID();
        PropertyService.innerProperties.push(property);
        return property;
    }

}export default PropertyService