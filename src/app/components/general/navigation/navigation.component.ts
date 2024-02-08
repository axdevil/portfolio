import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
    selector: 'navigation',
    standalone: true,
    imports: [],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
    constructor(private clipboard: Clipboard) {}

    @Input() numSection = 0;

    @Output() changeSectionEvent = new EventEmitter<number>();
    changeSection(section: number) {
        this.changeSectionEvent.emit(section);
    }

    visibleContacts = false;

    toggleContactMe() {
        if (!this.visibleContacts) {
            this.visibleContacts = true;
        } else {
            this.visibleContacts = false;
        }
    }

    emailCopied = false;
    copyEmail() {
        this.clipboard.copy('jorgegarciadev@outlook.com');
        this.emailCopied = true;

        setTimeout(() => {
            this.emailCopied = false;
        }, 5000);
    }
}
