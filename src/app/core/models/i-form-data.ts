export interface IFormData {
    fieldSetLabel: string
    questions: {
        key: string,
        label: string,
        type: string,
        controlType: string,
        placeholder?: string,
        options?:
        {
            key: string,
            value: string
        }[]
    }[]
}
