import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
