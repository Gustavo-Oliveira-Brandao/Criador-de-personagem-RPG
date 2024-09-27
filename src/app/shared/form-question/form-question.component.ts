import { Component, Input } from '@angular/core';
import { FormField } from '../../core/models/form-field';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-question',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-question.component.html',
  styleUrl: './form-question.component.sass'
})
export class FormQuestionComponent {

  @Input() question!: FormField<string>
  @Input() form!: FormGroup

  get isValid() {
    return this.form.controls[this.question.key].valid
  }
}
