import { Contact } from "./contact.entity";
import { PetQualification } from "./pet.qualification.entity";
import { Place } from "./place.entity";
import { Project } from "./project.entity";

export class ShowResult {
    public code: string;
    public date: Date;
    public handler: Contact;
    public judge: Contact;
    public pageTemplateCode: string;
    public place: Place;
    public project: Project;
    public qualification: PetQualification;
    public result: string;
    public url: string;
    public webLink: string;
}