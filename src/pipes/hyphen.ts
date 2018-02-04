import { Pipe, PipeTransform } from '@angular/core';
import hypher from 'hypher';
import hyphenation from 'hyphenation.es';

declare var require: any;

var Hypher = require('hypher');
//var Hypher = hypher();
var spanish = require('hyphenation.es');
//var spanish = hyphenation();
var h = new Hypher(spanish);

@Pipe({
  name: 'hyphen',
})
export class HyphenPipe implements PipeTransform {

  transform(value: string) {
    return h.hyphenateText(value);
  }
}
