import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/general/navigation/navigation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { WorkComponent } from './components/work/work.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavigationComponent, GreetingComponent, SkillsComponent, WorkComponent, AboutmeComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    numSection = 0;

    setSection(section: number) {
        this.numSection = section;
    }

    //CAMBIO DE SECTION MEDIANTE SCROLL
    canScroll = true;
    scroll(event: WheelEvent) {
        if (this.canScroll) {
            this.changeSection(Math.sign(event.deltaY));
            this.canScroll = false;
        }

        const scrollDelay = 1000;

        if (!this.canScroll) {
            setTimeout(() => {
                this.canScroll = true;
                return;
            }, scrollDelay);
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

    //CAMBIAR TITULO DE SECCION
    changeTitle(): string {
        let title = 'Title';

        switch (this.numSection) {
            case 1:
                title = 'About me';
                break;
            case 2:
                title = 'Skills';
                break;
            case 3:
                title = "Featured work"
                break;
        }

        return title;
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
