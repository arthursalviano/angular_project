import {Component} from '@angular/core'

import {MenuInicialComponent} from '../menu-inicial/menu-inicial.component'

@Component({
    moduleId: module.id,
    selector: 'centro',
    templateUrl: 'centro.component.html',
    directives: ([MenuInicialComponent])
})
export class CentroComponent{

}