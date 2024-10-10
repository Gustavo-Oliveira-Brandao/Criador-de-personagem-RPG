import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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

  attackForm = this.fb.group({
    attackName: ["", Validators.required],
    attackRange: ["", Validators.required],
    attackToHitSkill: ["", Validators.required],
    attackToHit: [0, Validators.required],
    attackCritQuantity: [2, Validators.required],
    attackCritMargin: [20, Validators.required],
    attackDescription: [""],
    damageAttributeBonus: [0, Validators.required],
    
  })

  attackQuestions : IFormData[] = []

  onSubmit(){}
}
