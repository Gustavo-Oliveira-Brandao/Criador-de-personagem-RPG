import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.sass'
})
export class DynamicFormComponent {

  @Input() Form !: FormGroup
  @Input() FormData : any
  @Input() callbackFunction !: () => void

}
