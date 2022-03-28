import { Account } from "./account.entity";
import { Contact } from "./contact.entity";
import { Entity } from "./entity";
import { TheEvent } from "./event.entity";
import { ProjectCategory } from "./project.category.entity";
import { ProjectPet } from "./project.pet.entity";
import { ProjectStatus } from "./project.status.entity";
import { ProjectType } from "./project.type.entity";

export class Project extends Entity {
    public account: Account;
    public category: ProjectCategory;
    public endDate: Date;
    public event: TheEvent;
    public name: string;
    public owner: Contact;
    public pageTemplateCode: string;
    public participants: ProjectPet[];
    public pugName: string;
    public startDate: Date;
    public status: ProjectStatus;
    public type: ProjectType;
    public url: string;
}

