import { FormField } from "./form-field";

export class TextboxQuestion extends FormField<string>{
    override controlType = "textbox"
}
