import { Pipe, PipeTransform } from '@angular/core';

var Hypher = require('hypher');
var spanish = require('hyphenation.es');
var h = new Hypher(spanish);

@Pipe({
  name: 'hyphen',
})
export class HyphenPipe implements PipeTransform {

  transform(value: string) {
    return h.hyphenateText(value);
  }
}
