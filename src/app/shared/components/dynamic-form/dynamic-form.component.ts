import { Component, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ExpandedTabControlService } from '../../../pages/character-sheet/services/expanded-tab-control.service';
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

  @Output() onSubmitEvent = new EventEmitter()


  constructor(protected etc : ExpandedTabControlService){}

  onSubmit(){
    this.onSubmitEvent.emit(this.form.getRawValue())
  }
}
