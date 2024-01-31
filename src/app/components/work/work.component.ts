import { Component } from '@angular/core';
import { WorkCardComponent } from './work-card/work-card.component';
import workDataJSON from '../../data/work.json';

@Component({
    selector: 'work',
    standalone: true,
    imports: [WorkCardComponent],
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss',
})
export class WorkComponent {
    workData: any = workDataJSON;
}
