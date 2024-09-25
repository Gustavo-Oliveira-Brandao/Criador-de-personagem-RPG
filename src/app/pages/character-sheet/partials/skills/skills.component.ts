import { Component } from '@angular/core';
import { RollButtonComponent } from "../../components/roll-button/roll-button.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent {

  skills: any = [
    {
      name: 'acrobacia',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'destreza'
    },

    {
      name: 'adestramento',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'carisma'
    },
    
    {
      name: 'atletismo',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'forca'
    },

    {
      name: 'atuacao',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'carisma'
    },

    {
      name: 'cavalgar',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'destreza'
    },

    {
      name: 'conhecimento',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'cura',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'sabedoria'
    },

    {
      name: 'diplomacia',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'carisma'
    },

    {
      name: 'enganacao',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'carisma'
    },

    {
      name: 'furtividade',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'destreza'
    },

    {
      name: 'guerra',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'iniciativa',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'destreza'
    },

    {
      name: 'intimidacao',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'carisma'
    },

    {
      name: 'jogatina',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'carisma'
    },

    {
      name: 'ladinagem',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'destreza'
    },

    {
      name: 'luta',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'forca'
    },

    {
      name: 'misticismo',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'nobreza',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'oficio',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'inteligencia'
    },

    {
      name: 'percepcao',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'sabedoria'
    },

    {
      name: 'pilotagem',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'destreza'
    },

    {
      name: 'pontaria',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'destreza'
    },

    {
      name: 'religiao',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'sabedoria'
    },

    {
      name: 'sobrevivencia',
      totalValue: 0,
      training: 'destreinado',
      trainingValue: 0,
      attribute: 'sabedoria'
    },
  ];
}