import { Component } from '@angular/core';

import { HeaderComponent } from './Sections/header/header.component' 
import { CentroComponent } from './Sections/centro/centro.component'
import { FooterComponent } from './Sections/footer/footer.component'

@Component({
    selector: 'my-app',
    template: `
        <header-site></header-site>
        <centro></centro>
        <footer-site></footer-site>
    `,
    directives: ( [HeaderComponent,CentroComponent,FooterComponent])
})
export class AppComponent { }
