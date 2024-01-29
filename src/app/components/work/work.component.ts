import { Component } from '@angular/core';
import { WorkCardComponent } from './work-card/work-card.component';

@Component({
    selector: 'work',
    standalone: true,
    imports: [WorkCardComponent],
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss',
})
export class WorkComponent {}
