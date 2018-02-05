import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  parrafo = [];

  constructor() { 
    this.parrafo = [
      "starting GUESS THE SEED Contest miss your chance to win WAVES Read more on Waves Community Hub",
      "On January we organized our first Business Meetup of in Ede Netherlands Thanks to everyone who came to the party More meetups in random countries coming",
      "Whole lotta love goes out to our followers on Twitter Just imagine all those people together tweeting about Waves This definitely says a lot about Waves ecology",
      "Quick wins on resolving phishing and scam issues in collaboration with Discovered a suspicious page on a social network Report it",
      "One of the first participants of Waves Lab Simdaq reached hard cap in hours next big star",
      "Waves Platform is now powering RewardMob a tournament based reward platform for mobile game developers Wanna spoil your players with instant rewards",
      "",
      "",
      "",
      "",
      "",

    ]
    //this.parrafo = '<p>Se informa que, para facilitar el ingreso de alumnos nuevos, <strong>el sistema de matr&iacute;cula e inscripci&oacute;n para los alumnos antiguos se cerrar&aacute;</strong> desde el jueves 18 de enero a las 11:30 horas. hasta el domingo 21 de enero a las 20:00 horas. Posteriormente, el sistema se encontrar&aacute;n abierto hasta las fechas indicadas en el informativo anterior.</p>';
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
