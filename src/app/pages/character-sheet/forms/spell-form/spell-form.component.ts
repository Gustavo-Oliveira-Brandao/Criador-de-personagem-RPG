import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { IFormData } from '../../../../core/models/i-form-data';

@Component({
  selector: 'app-spell-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './spell-form.component.html',
  styleUrl: './spell-form.component.sass'
})
export class SpellFormComponent {

  constructor(private readonly fb : FormBuilder, private readonly etc: ExpandedTabControlService){

  }

  spellForm = this.fb.nonNullable.group({})

  spellQuestions : IFormData[] = []


  onSubmit(){}
}
