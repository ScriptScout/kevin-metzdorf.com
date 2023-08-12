import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  iconsArray = [
    {
      name: 'Angular',
      icon: 'angular.png'
    },
    {
      name: 'Typescript',
      icon: 'typescript.png'
    },
    {
      name: 'Javascript',
      icon: 'javascript.png'
    },
    {
      name: 'Html',
      icon: 'html.png'
    },
    {
      name: 'Firebase',
      icon: 'firebase.png'
    },
    {
      name: 'Git',
      icon: 'git.png'
    },
    {
      name: 'Css',
      icon: 'css.png'
    },
    {
      name: 'Rest_api',
      icon: 'rest_api.png'
    },
    {
      name: 'Scrum',
      icon: 'scrum.png'
    },
    {
      name: 'Material design',
      icon: 'material_design.png'
    }
  ];
}
