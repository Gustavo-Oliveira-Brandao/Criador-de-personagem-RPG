export interface IFormData {
    key: string,
    label: string,
    type: string,
    controlType: string,
    required: boolean,
    options ?: 
        {
            key: string,
            value: string
        }[]
    
}
