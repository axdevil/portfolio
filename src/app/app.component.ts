import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/general/navigation/navigation.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavigationComponent, AboutmeComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    numSection = 0;

    scrollDelay = 0;
    scroll(event: WheelEvent) {
        const scrollMax = 2;

        if (Math.sign(event.deltaY) === -1) {
            this.scrollDelay -= 1;
        } else {
            this.scrollDelay += 1;
        }

        if (this.scrollDelay === scrollMax || this.scrollDelay === -scrollMax) {
            this.changeSection(Math.sign(this.scrollDelay));
            this.scrollDelay = 0;
        }
    }

    changeSection(step: number) {
        this.numSection += step;
        if (this.numSection < 0) {
            this.numSection = 0;
        } else if (this.numSection > 3) {
            this.numSection = 3;
        }
    }
}
