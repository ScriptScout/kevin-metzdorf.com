import { Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: false
})
export class SkillsComponent {

  iconsArray = [
    {
      name: 'Shopify',
      icon: 'shopify.png',
      animation: 'fade-right',
      category: 'frontend'
    },
    {
      name: 'TypeScript',
      icon: 'typescript.png',
      animation: 'fade-right',
      category: 'frontend'
    },
    {
      name: 'JavaScript',
      icon: 'javascript.png',
      animation: 'fade-right',
      category: 'frontend'
    },
    {
      name: 'Html',
      icon: 'html.png',
      animation: 'fade-left',
      category: 'frontend'
    },
    {
      name: 'Firebase',
      icon: 'firebase.png',
      animation: 'fade-left',
      category: 'backend'
    },
    {
      name: 'Git',
      icon: 'git.png',
      animation: 'fade-left',
      category: 'tooling'
    },
    {
      name: 'Css',
      icon: 'css.png',
      animation: 'fade-right',
      category: 'frontend'
    },
    {
      name: 'Rest-Api',
      icon: 'rest_api.png',
      animation: 'fade-right',
      category: 'backend'
    },
    {
      name: 'Scrum',
      icon: 'scrum.png',
      animation: 'fade-right',
      category: 'workflow'
    },
    {
      name: 'Material design',
      icon: 'material_design.png',
      animation: 'fade-left',
      category: 'frontend'
    }
  ];
}
