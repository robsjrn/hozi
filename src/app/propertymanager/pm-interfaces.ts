export interface IProperty {
    
    _id? :string
    name :string
    contact :{
        name:string
        phonenumber:string
    }
    location?: {
        name: string;
        lat?: number;
        lng?: number;
     }
    type :string
    status :string
    description? :string
    createdby? :string
    datecreated?: string
    verifiedby?: string
    dateverified? :string
    verifiedstatus? :string
    propertymanagerid? :string
}


