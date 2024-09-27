import { FormField } from "./form-field";

export class DropdownQuestion extends FormField<string> {
    override controlType = "dropdown"
}
