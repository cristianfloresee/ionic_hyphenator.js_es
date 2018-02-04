import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  parrafo;

  constructor() { 
    this.parrafo = '<p>Se informa que, para facilitar el ingreso de alumnos nuevos, <strong>el sistema de matr&iacute;cula e inscripci&oacute;n para los alumnos antiguos se cerrar&aacute;</strong> desde el jueves 18 de enero a las 11:30 horas. hasta el domingo 21 de enero a las 20:00 horas. Posteriormente, el sistema se encontrar&aacute;n abierto hasta las fechas indicadas en el informativo anterior.</p>';
    this.parrafo = this.transformarString(this.parrafo);    
  }

  transformarString(parrafo){
    //parrafo = "&aacute;";

    parrafo = parrafo.replace(/&aacute;/g, "á");
    parrafo = parrafo.replace(/&eacute;/g, "é");
    parrafo = parrafo.replace(/&iacute;/g, "í");
    parrafo = parrafo.replace(/&oacute;/g, "ó");
    parrafo = parrafo.replace(/&uacute;/g, "ú");
    return parrafo;

    //style=\" ------ \", ""
    //console.log(parrafo);
    
  }

}
