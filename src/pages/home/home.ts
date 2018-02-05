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
      "The BlackBot a grid trading bot for Waves DEX is released hello world Read more",
      "Watch the story of Waves Platform unfold with the development of smart contracts Let us know your thoughts Follow the link to take a poll",
      "Waves Platform team loves to travel all around the globe, and posted some more pics from recent World Economic Forum in Davos",
      "Waves Weekly is coming back We decided to renew it a bit Subscribe to our Instagram channel for backstage sneak peeks",
      "More airdrops today Weekly Liquid tokens to WCT holders and TDX tokens to Waves and WCT holders Ready for the tokens cram Read more in our blog",
      "Did something just vanish Not when you know MyTrackNet to help you find just anything Read about their successful",
      "Waves Platform January review is here From now on try to post these reviews every month And yes the story is just beginning and the runway ahead is promising",
      "Dear all sorry for not releasing Win version of the Desktop Client last week We just need to resolve some OS specific issues before the launch is next week Thanks for your understanding",
      "Waves to push into billion-dollar Southeast Asian token markets and gain access to a dose of the region largest corporations Read more on our official blog"
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
