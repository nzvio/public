export class Entity {
    public id: number | string;    
    
    public build (o: Object): any {
        for (let field in o) {
            this[field] = o[field];
        }
        
        return this;
    }

    protected twoDigits(n: number): string {
        return (n < 10) ? `0${n}` : `${n}`;
    }    

    public mysqlDate(date: Date): string {
        return `${date.getFullYear()}-${this.twoDigits(date.getMonth()+1)}-${this.twoDigits(date.getDate())}`;
    }
}
