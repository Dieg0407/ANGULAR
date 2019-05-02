import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    mostrar = true;
    frase = {
        mensaje: 'Esta wea es un mensaje',
        autor: 'nxoth'
    }
    labels = ['Label 01', 'Label 02', 'Label 03', 'Label 04'];

    cambiarMostrar = () => this.mostrar = !this.mostrar;
}

