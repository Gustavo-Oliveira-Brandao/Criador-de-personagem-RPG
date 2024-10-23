import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IFormData } from '../../../core/models/i-form-data';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.sass'
})
export class DynamicFormComponent {

  @Input() form !: FormGroup
  @Input() fieldSets !: IFormData[]
  @Input() action !: string

  @Output() onSubmitEvent = new EventEmitter()


  constructor(){}

  onSubmit(){
    this.onSubmitEvent.emit(this.form.getRawValue())
  }
}
