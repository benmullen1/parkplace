import {Property} from '../model/Property';
import fileProps from '../model/properties.json';

class PropertyController{

    getProperties() {

        return fileProps;
    }
    
    saveProperties(theProperties : Property[]){

    }
    
}export default PropertyController




