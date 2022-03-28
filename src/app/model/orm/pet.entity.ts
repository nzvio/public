import { Breed } from "./breed.entity";
import { Contact } from "./contact.entity";
import { Entity } from "./entity";
import { HealthExam } from "./healthexam.entity";
import { Kennel } from "./kennel.entity";
import { PetIdentifier } from "./pet.identifier.entity";
import { PetTitle } from "./pet.title.entity";
import { PetType } from "./pet.type.entity";
import { Sex } from "./sex.entity";
import { ShowResult } from "./showresult.entity";

export class Pet extends Entity {
    breed?: Breed;
    breeder?: Contact;
    childrens?: Pet[];
    dateOfBirth?: Date;
    dateOfDeath?: Date;
    father?: Pet;
    healthList?: HealthExam[];
    idMarkings?: PetIdentifier[];
    kennel?: Kennel;
    mother?: Pet;
    name: string;
    owner?: Contact;
    pageTemplateCode?: string;
    pedigree?: Pet;
    pedigreeNumbers?: PetIdentifier[];
    petType?: PetType;
    pugName?: string;
    sex?: Sex;
    showResults?: ShowResult[];
    siblings?: Pet[];
    titlesList?: PetTitle[];
    url?: string;
}