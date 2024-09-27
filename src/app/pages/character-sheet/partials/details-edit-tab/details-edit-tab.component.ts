import { Component, Input } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { AsyncPipe } from '@angular/common';
import { QuestionService } from '../../../../shared/services/question.service';

@Component({
  selector: 'app-details-edit-tab',
  standalone: true,
  imports: [DynamicFormComponent, AsyncPipe],
  templateUrl: './details-edit-tab.component.html',
  styleUrl: './details-edit-tab.component.sass'
})
export class DetailsEditTabComponent {
  @Input() item : any
  constructor(protected qs:QuestionService){}
}
