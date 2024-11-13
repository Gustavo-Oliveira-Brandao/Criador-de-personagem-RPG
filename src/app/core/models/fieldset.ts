export interface Fieldset<T> {
    fieldSetLabel: string
    questions: {
        key: string,
        label: string,
        type: string,
        controlType: string,
        placeholder?: string,
        required: boolean,
        value: T,
        options?:
        {
            key: string,
            value: string
        }[]
    }[]
}
