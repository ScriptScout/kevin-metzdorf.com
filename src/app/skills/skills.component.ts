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
      icon: 'angular.png',
      animation: 'fade-right'
    },
    {
      name: 'TypeScript',
      icon: 'typescript.png',
      animation: 'fade-right'
    },
    {
      name: 'JavaScript',
      icon: 'javascript.png',
      animation: 'fade-right'
    },
    {
      name: 'Html',
      icon: 'html.png',
      animation: 'fade-left'
    },
    {
      name: 'Firebase',
      icon: 'firebase.png',
      animation: 'fade-left'
    },
    {
      name: 'Git',
      icon: 'git.png',
      animation: 'fade-left'
    },
    {
      name: 'Css',
      icon: 'css.png',
      animation: 'fade-right'
    },
    {
      name: 'Rest-Api',
      icon: 'rest_api.png',
      animation: 'fade-right'
    },
    {
      name: 'Scrum',
      icon: 'scrum.png',
      animation: 'fade-right'
    },
    {
      name: 'Material design',
      icon: 'material_design.png',
      animation: 'fade-left'
    }
  ];
}
