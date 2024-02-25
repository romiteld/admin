import { Component, OnInit } from '@angular/core';
import Masonry from 'masonry-layout';

@Component({
  selector: 'bootstrap-5',
  templateUrl: './bootstrap-5.html'
})

export class Bootstrap5Page implements OnInit {
	ngOnInit() {
		new Masonry('[data-masonry]');
	}
}
