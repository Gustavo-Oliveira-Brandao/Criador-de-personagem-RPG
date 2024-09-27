export class QuestionBase<T> {
    label: string
    key: string
    value: T | undefined
    required: boolean
    order: number
    controlType: string
    type: string
    options: {
        key: string,
        value: string
    }[]

    constructor(
        options: {
            key?: string;
            label?: string;
            value?: T;
            required?: boolean;
            order?: number;
            controlType?: string;
            type?: string;
            options?: { key: string; value: string }[];
        } = {},
    ) {
        this.label = options.label ?? ""
        this.key = options.key ?? ""
        this.value = options.value
        this.required = !!options.required
        this.order = options.order ?? 1
        this.controlType = options.controlType ?? ""
        this.type = options.type ?? ""
        this.options = options.options ?? []
    }
}
