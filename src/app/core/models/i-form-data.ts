export interface IFormData {
    key: string,
    label: string,
    type: string,
    value: string | number,
    controlType: string,
    required: boolean,
    options ?: 
        {
            key: string,
            value: string
        }[]
    
}
