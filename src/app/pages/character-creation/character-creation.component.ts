import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RpgCharacter } from '../../core/models/character';
import { Fieldset } from '../../core/models/fieldset';
import { CharacterService } from '../character-sheet/services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormComponent } from "../../shared/components/dynamic-form/dynamic-form.component";
import { Attribute } from '../../core/models/attribute';
import { Skill } from '../../core/models/skill';
import { QuestionControlService } from '../../shared/services/question-control.service';

@Component({
  selector: 'app-character-creation',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './character-creation.component.html',
  styleUrl: './character-creation.component.sass'
})
export class CharacterCreationComponent {

  constructor(
    private readonly fb: FormBuilder,
    private readonly characterService: CharacterService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly qcs : QuestionControlService
  ) { 
    this.form = qcs.toFormGroup(this.fieldSets)
  }

  form !: FormGroup

  createCharacter(formValue: any) : void {

    const character: Partial<RpgCharacter> = {
      name: formValue.name,
      race: formValue.race,
      charClass: formValue.charClass,
      origin: formValue.origin,
      divinity: formValue.divinity,
      level: 1,
      maxHitPoints: +formValue.maxHitPoints,
      currentHitPoints: +formValue.maxHitPoints,
      temporaryHitPoints: 0,
      maxManaPoints: +formValue.maxManaPoints,
      currentManaPoints: +formValue.maxManaPoints,
      armorClass: 10,
      armorPenaltyValue: 0,
      speed: 30,
      story: "",
      attributes: this.presetAttributes as Attribute[],
      skills: this.presetSkills as Skill[],
      attacks: [],
      spells: []
    }

    this.characterService.saveCharacter(character).subscribe({
      complete: () => {
        this.router.navigate(["/character-selection"], { relativeTo: this.route })
      }
    })
  }

  fieldSets: Fieldset<any>[] = [
    {
      fieldSetLabel: "Detalhes",
      questions: [

        {
          key: "name",
          label: "nome do personagem: ",
          type: "text",
          controlType: "input",
          required: true,
          value: "",
          placeholder: "Ragnar"
        },
        {
          key: "race",
          label: "raça: ",
          type: "text",
          controlType: "input",
          required: true,
          value: "",
          placeholder: "Elfo"
        },
        {
          key: "charClass",
          label: "classe: ",
          type: "text",
          controlType: "input",
          required: true,
          value: "",
          placeholder: "Guerreiro"
        },
        {
          key: "origin",
          label: "origem: ",
          type: "text",
          controlType: "input",
          required: true,
          value: "",
          placeholder: "Taverneiro"
        },
        {
          key: "divinity",
          label: "Divindade: ",
          type: "text",
          controlType: "input",
          required: true,
          value: "",
          placeholder: "Alihanna"
        }
      ]
    },
    {
      fieldSetLabel: "Status",
      questions: [

        {
          key: "maxHitPoints",
          label: "Pontos de vida:",
          type: "number",
          controlType: "input",
          required: true,
          value: 0,
          placeholder: "12"
        },
        {
          key: "maxManaPoints",
          label: "Pontos de mana:",
          type: "number",
          controlType: "input",
          required: true,
          value: 0,
          placeholder: "6"
        },
        {
          key: "speed",
          label: "Deslocamento: ",
          type: "number",
          controlType: "input",
          required: true,
          value: 9,
          placeholder: "9"
        }
      ]
    },
    {
      fieldSetLabel: "Atributos",

      questions: [
        {
          key: "strength",
          label: "Forca: ",
          type: "number",
          controlType: "input",
          required: true,
          value: 0,
          placeholder: "0"
        },
        {
          key: "dexterity",
          label: "Destreza: ",
          type: "number",
          controlType: "input",
          required: true,
          value: 0,
          placeholder: "0"
        },
        {
          key: "constitution",
          label: "Constituicão: ",
          type: "number",
          controlType: "input",
          required: true,
          value: 0,
          placeholder: "0"
        },
        {
          key: "intelligence",
          label: "Inteligência: ",
          type: "number",
          controlType: "input",
          required: true,
          value: 0,
          placeholder: "0"
        },
        {
          key: "wisdow",
          label: "Sabedoria: ",
          type: "number",
          controlType: "input",
          required: true,
          value: 0,
          placeholder: "0"
        },
        {
          key: "charisma",
          label: "Carisma: ",
          type: "number",
          controlType: "input",
          required: true,
          value: 0,
          placeholder: "0"
        },
      ]
    }
  ]

  presetAttributes: Partial<Attribute>[] = [
    {
      name: "forca",
      baseValue: 0,
      totalValue: 0
    },
    {
      name: "destreza",
      baseValue: 0,
      totalValue: 0
    },
    {
      name: "constituicao",
      baseValue: 0,
      totalValue: 0
    },
    {
      name: "inteligencia",
      baseValue: 0,
      totalValue: 0
    },
    {
      name: "sabedoria",
      baseValue: 0,
      totalValue: 0
    },
    {
      name: "carisma",
      baseValue: 0,
      totalValue: 0
    }
  ]

  presetSkills: Partial<Skill>[] = [
    {
      name: 'acrobacia',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: true,
      isSavingThrow: false
    },

    {
      name: 'adestramento',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'carisma',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'atletismo',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'forca',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'atuacao',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'carisma',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'cavalgar',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'conhecimento',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'cura',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'sabedoria',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'diplomacia',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'carisma',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'enganacao',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'carisma',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },
    {
      name: "fortitude",
      totalValue: 0,
      modifiers: [],
      training: "destreinado",
      attribute: "constituicao",
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: true
    },
    {
      name: 'furtividade',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: true,
      isSavingThrow: false
    },

    {
      name: 'guerra',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: "identificar magia",
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: "inteligencia",
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'iniciativa',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'intimidacao',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'carisma',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'jogatina',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'carisma',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'ladinagem',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'destreza',
      trainingRestriction: true,
      armorPenalty: true,
      isSavingThrow: false
    },

    {
      name: 'luta',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'forca',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'misticismo',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'nobreza',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: "obter informacao",
      totalValue: 0,
      training: "destreinado",
      modifiers: [],
      attribute: "carisma",
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'oficio',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: "percepcao",
      totalValue: 0,
      modifiers: [],
      training: "destreinado",
      attribute: "sabedoria",
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'pilotagem',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'destreza',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'pontaria',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },
    {
      name: "reflexos",
      totalValue: 0,
      modifiers: [],
      training: "destreinado",
      attribute: "destreza",
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: true
    },
    {
      name: 'religiao',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'sabedoria',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'sobrevivencia',
      totalValue: 0,
      training: 'destreinado',
      modifiers: [],
      attribute: 'sabedoria',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },
    {
      name: "vontade",
      totalValue: 0,
      modifiers: [],
      training: "destreinado",
      attribute: "sabedoria",
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: true
    }
  ]
}
