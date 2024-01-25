import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'navigation',
    standalone: true,
    imports: [],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
    @Input() numSection = 0;

    changeClass(): string {
        if (this.numSection === 0) {
            return 'bottom';
        } else {
            return 'left';
        }
    }

    @Output() changeSectionEvent = new EventEmitter<number>();
    changeSection(section: number) {
        this.changeSectionEvent.emit(section);
    }
}
