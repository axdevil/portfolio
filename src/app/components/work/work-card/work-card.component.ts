import { Component, Input } from '@angular/core';

@Component({
    selector: 'work-card',
    standalone: true,
    imports: [],
    templateUrl: './work-card.component.html',
    styleUrl: './work-card.component.scss',
})
export class WorkCardComponent {
    @Input() image!: string;
    @Input() description!: string;
    @Input() tags!: [string];
    @Input() webpage!: string;
}
