import { Component, Input, OnInit } from '@angular/core';
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

  @Input() Form !: FormGroup
  @Input() FormData !: IFormData[]
  @Input() callbackFunction !: () => void

  constructor(){
    
  }

}
