import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { IFormData } from '../../../../core/models/i-form-data';

@Component({
  selector: 'app-attack-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './attack-form.component.html',
  styleUrl: './attack-form.component.sass'
})
export class AttackFormComponent {

  constructor(private readonly fb : FormBuilder, private readonly etc : ExpandedTabControlService){}

  attackForm = this.fb.group({})

  attackQuestions : IFormData[] = []

  onSubmit(){}
}
