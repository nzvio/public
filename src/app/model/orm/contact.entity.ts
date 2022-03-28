import { Country } from "./country.entity";
import { Entity } from "./entity"

export class Contact extends Entity {    
    public name: string;
    public pageTemplateCode: string;
    public url: string;
    public country?: Country;
}
