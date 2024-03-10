type ActionType =
    | "approve"
    | "delegate"
    | "resubmit"
    | "reject";

type SortOrder =
    | "asc"
    | "desc";

type UserType =
    | "AllUsers"
    | "ActiveUsers"
    | "DeactiveUsers"
    | "ConfirmedUsers"
    | "NotConfirmedUsers"
    | "DeletedUsers"
    | "ActiveConfirmedUsers"
    | "AdminUsers"
    | "ActiveConfirmedAdmins";

type ApprovalType =
    | "awaiting"
    | "others_awaiting";

type Approved =
    | "true"
    | "false"
    | "both";

type Trigger =
    | "workflow"
    | "approval"
    | "blueprint";

type SearchType =
    | "email"
    | "phone"
    | "word"
    | "criteria";

type ConnectionInvokeParamType =
    | 1
    | 2;

type ZOHO = {
    embeddedApp: {
        init(): Promise<unknown>
        on(event: string, fn: (data: any) => any): void
    },
    CRM: {
        API: {
            addNotes({ Entity, RecordID, Title, Content }: { Entity: string, RecordID: string, Title: string, Content: string }): Promise<any>
            approveRecord({ Entity, RecordID, actionType, comments, user }: { Entity: string, RecordID: string, actionType: ActionType, comments?: string, user: string }): Promise<any>
            attachFile({ Entity, RecordID, File }: { Entity: string, RecordID: string, File: { Name: string, Content: object } }): Promise<any>
            coql({ select_query }: { select_query: string }): Promise<any>
            deleteRecord({ Entity, RecordID }: { Entity: string, RecordID: string }): Promise<any>
            delinkRelatedRecord({ Entity, RecordID, RelatedListName, RelatedRecordID }: { Entity: string, RecordID: string, RelatedListName: string, RelatedRecordID: string }): Promise<any>
            getAllActions({ Entity, RecordID }: { Entity: string, RecordID: string }): Promise<any>
            getAllProfiles(): Promise<any>
            getAllRecords({ Entity, sort_order, converted, approved, page, per_page }: { Entity: string, sort_order?: SortOrder, converted?: boolean, approved?: Approved, page?: number, per_page?: number }): Promise<any>
            getAllUsers({ Type, page, per_page }: { Type: UserType, page?: number, per_page?: number }): Promise<any>
            getApprovalById({ id }: { id: string }): Promise<any>
            getApprovalRecords({ type }: { type: ApprovalType }): Promise<any>
            getApprovalsHistory(): Promise<any>
            getBluePrint({ Entity, RecordID }: { Entity: string, RecordID: string }): Promise<any>
            getFile({ id }: { id: string }): Promise<any>
            getOrgVariable(variableNamespace: string): Promise<any>
            getProfile({ ID }: { ID: string }): Promise<any>
            getRecord({ Entity, RecordID, approved }: { Entity: string, RecordID: string, approved?: Approved }): Promise<any>
            getRelatedRecords({ Entity, RecordID, RelatedListName, page, per_page }: { Entity: string, RecordID: string, RelatedListName: string, page?: number, per_page?: number }): Promise<any>
            getUser({ ID }: { ID: string }): Promise<any>
            insertRecord({ Entity, Trigger, APIData }: { Entity: string, Trigger: Trigger[], APIData: object }): Promise<any>
            searchRecord({ Entity, Type, Query, delay, page, per_page }: { Entity: string, Type: SearchType, Query: String, delay: boolean, page?: number, per_page?: number }): Promise<any>
            updateBluePrint({ Entity, RecordID, BlueprintData }: { Entity: string, RecordID: string, BlueprintData: object }): Promise<any>
            updateProfile({ ID, APIData }: { ID: string, APIData: object }): Promise<any>
            updateRecord({ Entity, Trigger, APIData }: { Entity: string, Trigger: Trigger[], APIData: object }): Promise<any>
            updateRelatedRecords({ Entity, RecordID, RelatedListName, RelatedRecordID, APIData }: { Entity: string, RecordID: string, RelatedListName: string, RelatedRecordID: string, APIData: object }): Promise<any>
            uploadFile({ CONTENT_TYPE, PARTS, FILE }: { CONTENT_TYPE: string, PARTS: object, FILE: { fileParam: string, file: object } }): Promise<any>
            updateRecord({ Entity, Trigger, APIData, duplicate_check_fields }: { Entity: string, Trigger: Trigger[], APIData: object, duplicate_check_fields: object }): Promise<any>
        },
        BLUEPRINT: {
            proceed(): Promise<any>
        },
        CONFIG: {
            getCurrentUser(): Promise<any>
            getOrgInfo(): Promise<any>
        },
        CONNECTION: {
            invoke(conn_name: string, req_data: { url: string, method?: string, parameters?: object, headers?: object, param_type: ConnectionInvokeParamType }): Promise<any>
        },
        CONNECTOR: {
            authorize(nameSpace: string): Promise<any>
            invokeAPI(nameSpace: string, data: { VARIABLES?: object, CONTENT_TYPE?: object, PARTS?: any[], FILE?: object }): Promise<any>
        },
        FUNCTIONS: {
            execute(func_name: string, req_data: object): Promise<any>
        },
        HTTP: {
            delete(request: { params: object, headers: object, body: object }): Promise<any>
            get(request: { params: object, headers: object }): Promise<any>
            patch(request: { params: object, headers: object, body: object }): Promise<any>
            post(request: { params: object, headers: object, body: object }): Promise<any>
            put(request: { params: object, headers: object, body: object }): Promise<any>
        },
        META: {
            getAssignmentRules(config: { Entity: string }): Promise<any>
            getCustomViews(config: { Entity: string, Id?: string }): Promise<any>
            getFields(config: { Entity: string }): Promise<any>
            getLayouts(config: { Entity: string, Id?: string }): Promise<any>
            getModules(): Promise<any>
            getRelatedList(config: { Entity: string }): Promise<any>
        },
        UI: {
            Resize(dimensions: { height: number, width: number }): Promise<any>
            Dialer: {
                maximize(): Promise<any>
                minimize(): Promise<any>
                notify(): Promise<any>
            }
            Popup: {
                close(): Promise<any>
                closeReload(): Promise<any>
            }
            Record: {
                create(data: { Entity: string }): Promise<any>
                edit(data: { Entity: string, RecordID: string }): Promise<any>
                open(data: { Entity: string, RecordID: string }): Promise<any>
                populate(RecordData: object): Promise<any>
            }
            Widget: {
                open(data: any): Promise<any>
            }
        },
        WIZARD: {
            post(record_data: object): Promise<any>
        },
    }
}

type ZDK = {
    Client: {
        sendResponse(request_uuid: string, data?: any): void
    }
}

type $Client = {
    close(response?: any): void
}