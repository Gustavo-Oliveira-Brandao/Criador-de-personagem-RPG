import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RpgCharacter } from '../../core/models/i-character';
import { IFormData } from '../../core/models/i-form-data';
import { CharacterService } from '../character-sheet/services/character.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-creation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './character-creation.component.html',
  styleUrl: './character-creation.component.sass'
})
export class CharacterCreationComponent {

  constructor(private readonly fb : FormBuilder, private readonly character : CharacterService, private route : ActivatedRoute, private router : Router){
  }

  creationForm = this.fb.nonNullable.group({
    name: ["", Validators.required],
    race: ["", Validators.required],
    charClass: ["", Validators.required],
    origin: ["", Validators.required],
    divinity: [""],
    maxHitPoints: [0, Validators.required],
    maxManaPoints: [0, Validators.required]
  })

  onSubmit(){
    const formValue = this.creationForm.getRawValue()

    const preset: RpgCharacter = {
      name: formValue.name,
      race: formValue.race,
      charClass: formValue.charClass,
      origin: formValue.origin,
      divinity: formValue.divinity,
      level: 1,
      maxHitPoints: formValue.maxHitPoints,
      actualHitPoints: formValue.maxHitPoints,
      temporaryHitPoints: 0,
      maxManaPoints: formValue.maxManaPoints,
      actualManaPoints: formValue.maxManaPoints,
      armorClass: 10,
      armorPenaltyValue: 0,
      speed: 0,
      story: "",
      attributes: [
        {
          name: "forca",
          totalValue: 0
        },
        {
          name: "destreza",
          totalValue: 0
        },
        {
          name: "constituicao",
          totalValue: 0
        },
        {
          name: "inteligencia",
          totalValue: 0
        },
        {
          name: "sabedoria",
          totalValue: 0
        },
        {
          name: "carisma",
          totalValue: 0
        }
  
      ],
      savingThrows: [
        {
          name: "fortitude",
          totalValue: 0,
          bonus: 0,
          training: "destreinado",
          trainingValue: 0,
          attribute: "constituicao",
          trainingRestriction: false,
          armorPenalty: false
        },
        {
          name: "reflexos",
          totalValue: 0,
          bonus: 0,
          training: "destreinado",
          trainingValue: 0,
          attribute: "destreza",
          trainingRestriction: false,
          armorPenalty: false
        },
        {
          name: "vontade",
          totalValue: 0,
          bonus: 0,
          training: "destreinado",
          trainingValue: 0,
          attribute: "sabedoria",
          trainingRestriction: false,
          armorPenalty: false
        }
      ],
  
      skills: [
        {
          name: 'acrobacia',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'destreza',
          trainingRestriction: false,
          armorPenalty: true
        },
  
        {
          name: 'adestramento',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'carisma',
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: 'atletismo',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'forca',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'atuacao',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'carisma',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'cavalgar',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'destreza',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'conhecimento',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'inteligencia',
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: 'cura',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'sabedoria',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'diplomacia',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'carisma',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'enganacao',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'carisma',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'furtividade',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'destreza',
          trainingRestriction: false,
          armorPenalty: true
        },
  
        {
          name: 'guerra',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'inteligencia',
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: "identificar magia",
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: "inteligencia",
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: 'iniciativa',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'destreza',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'intimidacao',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'carisma',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'jogatina',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'carisma',
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: 'ladinagem',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'destreza',
          trainingRestriction: true,
          armorPenalty: true
        },
  
        {
          name: 'luta',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'forca',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'misticismo',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'inteligencia',
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: 'nobreza',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'inteligencia',
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: "obter informacao",
          totalValue: 0,
          training: "destreinado",
          trainingValue: 0,
          bonus: 0,
          attribute: "carisma",
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'oficio',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'inteligencia',
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: "percepcao",
          totalValue: 0,
          bonus: 0,
          training: "destreinado",
          trainingValue: 0,
          attribute: "sabedoria",
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'pilotagem',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'destreza',
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: 'pontaria',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'destreza',
          trainingRestriction: false,
          armorPenalty: false
        },
  
        {
          name: 'religiao',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'sabedoria',
          trainingRestriction: true,
          armorPenalty: false
        },
  
        {
          name: 'sobrevivencia',
          totalValue: 0,
          training: 'destreinado',
          trainingValue: 0,
          bonus: 0,
          attribute: 'sabedoria',
          trainingRestriction: false,
          armorPenalty: false
        }
      ],
      talents: [
      ],
      attacks: [
      ],
      spells: [],
      items: []
    }

    this.character.createCharacter(preset)
    this.router.navigate(["/character-selection"], {relativeTo: this.route})

  }

  creationQuestions: IFormData[] = [
    {
      key: "name",
      label: "nome do personagem: ",
      type: "text",
      controlType: "input",
      placeholder: "Ragnar"
    },
    {
      key: "race",
      label: "raça: ",
      type: "text",
      controlType: "input",
      placeholder: "Elfo"
    },
    {
      key: "charClass",
      label: "classe: ",
      type: "text",
      controlType: "input",
      placeholder: "Guerreiro"
    },
    {
      key: "origin",
      label: "origem: ",
      type: "text",
      controlType: "input",
      placeholder: "Taverneiro"
    },
    {
      key: "divinity",
      label: "Divindade: ",
      type: "text",
      controlType: "input",
      placeholder: "Alihanna"
    },
    {
      key: "maxHitPoints",
      label: "Pontos de vida:",
      type: "number",
      controlType: "input",
      placeholder: "12"
    },
    {
      key: "maxManaPoints",
      label: "Pontos de mana:",
      type: "number",
      controlType: "input",
      placeholder: "6"
    }
  ]

}
