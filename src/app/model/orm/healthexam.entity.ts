import { Entity } from "./entity";
import { HealthExamObject } from "./healthexam.object.entity";
import { HealthExamResult } from "./healthexam.result.entity";

export class HealthExam extends Entity {      
    public date: Date;
    public healthExamObject: HealthExamObject;
    public healthExamResult: HealthExamResult;
    public pageTemplateCode: string;
    public url: string;
}
