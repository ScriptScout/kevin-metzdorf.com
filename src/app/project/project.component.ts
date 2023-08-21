import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  projects: any = [
    {
      name: 'Join',
      technologies: 'JavaScript | HTML | CSS | Backend',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'join.png',
      animation: 'fade-right'
    },
    {
      name: 'El Polo Locco',
      technologies: 'JavaScript | HTML | CSS | OOP',
      description: 'Object orientated 2d jump and run game with unuiqe style and humour',
      image: 'el_pollo_loco.png',
      animation: 'fade-left'
    },
    {
      name: 'Simple CRM',
      technologies: 'Angular | Firebase',
      description: 'A very simple customer relationship management system working with CRUD functionality',
      image: 'ring_of_fire.png',
      animation: 'fade-right'
    }
  ]
}
