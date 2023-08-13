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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
      image:
    }
  ]
}
