import { Component } from '@angular/core';

//Type Script file *(Java script code)
@Component({
    selector: 'app-header',
    standalone: true, // Marks as standalone ( Module comonents it is set to false)
    imports: [],
    templateUrl: './header.component.html', //Markup file renderered when <app-root> is used
    styleUrl: './header.component.css', // CSS data
  })
export class HeaderComponent {
}
