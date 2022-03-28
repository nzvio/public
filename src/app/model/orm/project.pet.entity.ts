import { Contact } from "./contact.entity";
import { Entity } from "./entity";
import { PetClass } from "./pet.class.entity";
import { Pet } from "./pet.entity";
import { PetQualification } from "./pet.qualification.entity";
import { Place } from "./place.entity";

export class ProjectPet extends Entity {
    public class: PetClass;
    public code: string;
    public date: Date;
    public handler: Contact;    
    public judge: Contact;
    public number: number;
    public pageTemplateCode: string;
    public pet: Pet;
    public place: Place;
    public qualification: PetQualification;
    public result: string;
    public url: string;
    public webLink: string;
}