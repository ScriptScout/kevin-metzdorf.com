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
      technologies: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'join.png',
      animation: 'fade-right',
      github: 'https://github.com/KevinAmmerman/Join',
      live: 'https://join.kevin-ammerman.com/'
    },
    {
      name: 'El Polo Locco',
      technologies: 'JavaScript | HTML | CSS | OOP',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: 'el_pollo_loco.png',
      animation: 'fade-left',
      github: 'https://github.com/KevinAmmerman/el_pollo_locco',
      live: 'https://el-pollo-loco.kevin-ammerman.com/'
    },
    {
      name: 'DA-Bubble',
      technologies: 'Angular | TypeScript | Firebase | HTML | SCSS',
      description: 'Chat messanger inspired by Slack. Contact your colleagues and exchange ideas with them.',
      image: 'da-bubble.png',
      animation: 'fade-right',
      github: 'https://github.com/KevinAmmerman/ring_of_fire',
      live: 'https://da-bubble.kevin-ammerman.com/'
    }
  ]
}
