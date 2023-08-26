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
      description: 'Object orientated 2d jump and run game with unuiqe style and humour',
      image: 'el_pollo_loco.png',
      animation: 'fade-left',
      github: 'https://github.com/KevinAmmerman/el_pollo_locco',
      live: 'https://el-pollo-loco.kevin-ammerman.com/'
    },
    {
      name: 'Ring of fire',
      technologies: 'Angular | TypeScript | Firebase | HTML | SCSS',
      description: 'Fantastic drink game for private or public Partys which pushing the Players to their limits.',
      image: 'ring_of_fire.png',
      animation: 'fade-right',
      github: 'https://github.com/KevinAmmerman/ring_of_fire',
      live: 'https://ring-of-fire.kevin-ammerman.com/'
    }
  ]
}
