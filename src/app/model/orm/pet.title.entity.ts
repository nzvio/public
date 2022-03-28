import { Entity } from "./entity";
import { Title } from "./title.entity";

export class PetTitle extends Entity {
    public date: Date;    
    public isConfirmed: boolean;
    public pageTemplateCode: string;
    public title: Title;
    public url: string;
}