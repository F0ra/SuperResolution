import { Injectable } from '@angular/core';
import { Sample } from './sample';
import { SAMPLES } from './samples';

@Injectable()
export class SampleDillerService {
  samples = SAMPLES;
  index: number;
  getSample = function() {
    console.log(this.samples.length);
    return this.samples;
  };

  initialImages = function() {
    return this.samples[this.index];
  };

  nextImages = function() {
    this.index += 1;
    if (this.index >= this.samples.length) { this.index = 0; }
    return this.samples[this.index];
  };

  prevImages = function() {
    this.index -= 1;
    if (this.index < 0) { this.index = this.samples.length - 1; }
    return this.samples[this.index];
  };

  constructor() {
    this.index = 12;
  }

}
