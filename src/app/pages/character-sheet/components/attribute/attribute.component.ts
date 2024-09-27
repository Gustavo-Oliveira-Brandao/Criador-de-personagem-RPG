import { Component, Input } from '@angular/core';
import { RollButtonComponent } from "../roll-button/roll-button.component";
import { QuestionService } from '../../../../shared/services/question.service';
import { IAttribute } from '../../../../core/models/i-attribute';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.sass'
})
export class AttributeComponent {

  @Input() attribute !: IAttribute
  @Input() index !: number

  constructor(private qs : QuestionService){

  }
  editAttribute(){
    this.qs.renderQuestions("attribute", this.index)
    this.qs.displayItem = this.attribute
    this.qs.isFormOpened = true
  }
}
