import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  icons: string[] = ['angular.png', 'typescript.png', 'javascript.png', 'html.png', 'firebase.png', 'git.png', 'css.png', 'rest_api.png', 'scrum.png', 'material_design.png'];
  icons_text: string[] = ['Angular', 'Typescript', 'Javascript', 'Html', 'Firebase', 'Git', 'Css', 'Rest_api', 'Scrum', 'Material design'];
}
