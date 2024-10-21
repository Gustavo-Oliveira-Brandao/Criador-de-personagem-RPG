import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { IFormData } from '../../../../core/models/i-form-data';

@Component({
  selector: 'app-talent-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './talent-form.component.html',
  styleUrl: './talent-form.component.sass'
})
export class TalentFormComponent {

  constructor(private readonly fb : FormBuilder, private readonly etc : ExpandedTabControlService){}

  talentForm = this.fb.nonNullable.group({})

  talentQuestions : IFormData[] = []

  onSubmit(){

  }
  
}
