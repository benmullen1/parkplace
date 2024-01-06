import Property from '../model/Property';
import PropertyService from '../services/PropertyService';

class PropertyController{

    service = new PropertyService();

    getProperties() {
        return this.service.retrieveProperties();
    }
    
    saveProperties(theProperties){
        theProperties.forEach(element => {
            this.saveProperty(element);
        });
    }

    saveProperty(property){
        this.service.storeProperty(property);
    }

    getNewProperty(){
        return this.service.generateNewProperty();
    }

    retrieveProperty(propertyID){
        return this.service.findProperty(propertyID);
    }
    
}export default PropertyController




