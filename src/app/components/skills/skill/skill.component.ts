import { Component, Input } from '@angular/core';

@Component({
    selector: 'skill',
    standalone: true,
    imports: [],
    templateUrl: './skill.component.html',
    styleUrl: './skill.component.scss',
})
export class SkillComponent {
    @Input() name = 'X';
    @Input() percentage = 80;
    @Input() variant = 'blue';
}
