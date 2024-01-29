import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/general/navigation/navigation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { GreetingComponent } from './components/greeting/greeting.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavigationComponent, GreetingComponent, SkillsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    numSection = 1;

    setSection(section: number) {
        this.numSection = section;
    }

    //CAMBIO DE SECTION MEDIANTE SCROLL
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

    //CAMBIAR VARIABLE DE SECCION
    changeSection(step: number) {
        this.numSection += step;
        if (this.numSection < 0) {
            this.numSection = 0;
        } else if (this.numSection > 3) {
            this.numSection = 3;
        }
    }

    //CAMBIAR CLASES CONFORME SECCION
    changeClass(): string {
        if (this.numSection === 0) {
            return 'column';
        } else {
            return 'row';
        }
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.key === 'ArrowUp' || event.key === 'w') {
            this.changeSection(-1);
        } else if (event.key === 'ArrowDown' || event.key === 's') {
            this.changeSection(1);
        }
    }
}
