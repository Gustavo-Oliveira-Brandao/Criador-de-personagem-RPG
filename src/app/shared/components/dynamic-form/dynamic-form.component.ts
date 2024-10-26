import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Fieldset } from '../../../core/models/fieldset';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.sass'
})
export class DynamicFormComponent {

  @Input() form !: FormGroup
  @Input() fieldSets !: Fieldset[]

  @Output() onSubmitEvent = new EventEmitter()

  constructor(){}

  onSubmit(){
    console.log("mas")
    this.onSubmitEvent.emit(this.form.getRawValue())
  }
}
