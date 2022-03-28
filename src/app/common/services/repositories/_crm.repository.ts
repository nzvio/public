import { CrmResponse } from "src/app/model/crm.response.interface";

export abstract class CrmRepository {
    protected processResponse(res: CrmResponse): any {
        return eval("("+res.GetExportJsonEntityByUrlResult+")");
    }
}