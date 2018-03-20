import { Component, OnInit } from '@angular/core';
import { SampleDillerService } from '../sample-diller.service';


@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
})
export class ExamplesComponent implements OnInit {

  // initialImages = this.samplesDiller.initialImages();
  initial = function() {
    const leftImage = document.getElementById('left');
    const rightImage = document.getElementById('right');
    const images = this.samplesDiller.initialImages();
    leftImage.setAttribute('src', images.SuperResolutionImage);
    rightImage.setAttribute('src', images.bicubicImage);
  };
  next = function() {
    const leftImage = document.getElementById('left');
    const rightImage = document.getElementById('right');
    const images = this.samplesDiller.nextImages();
    leftImage.setAttribute('src', images.SuperResolutionImage);
    rightImage.setAttribute('src', images.bicubicImage);
  };

  prev = function() {
    const leftImage = document.getElementById('left');
    const rightImage = document.getElementById('right');
    const images = this.samplesDiller.prevImages();
    leftImage.setAttribute('src', images.SuperResolutionImage);
    rightImage.setAttribute('src', images.bicubicImage);
  };
  constructor(private samplesDiller: SampleDillerService ) {
    this.samplesDiller = samplesDiller;
  }

  ngOnInit() {
    this.initial();
  }

}
