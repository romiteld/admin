import { Component, ViewEncapsulation } from '@angular/core';
import 'lity';

@Component({
  selector: 'gallery-v2',
  templateUrl: './gallery-v2.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './gallery-v2.css' ]
})

export class GalleryV2Page {
	counter(i: number) {
		return new Array(i);
	}
}
