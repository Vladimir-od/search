import {Component, OnInit} from '@angular/core';
import {Container} from './container';
import {SearchService} from './search.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  container: Container;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getContainer(this.container).subscribe(res => this.container = res);
  }
  getContainer(numberId) {
    this.searchService.getContainer(numberId).subscribe(c => this.container = c);
  //  console.log(this.container);
  }
  clear(form: NgForm) {
    form.reset();
  }
}

