import {Component, Input, OnInit} from '@angular/core';
import {Container, History} from '../container';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-container-detailes',
  templateUrl: './container-detailes.component.html',
  styleUrls: ['./container-detailes.component.css']
})
export class ContainerDetailesComponent implements OnInit {

  @Input()
  container: Container;
  histories: History[];
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    const numberId = this.container;
    this.searchService.getContainer(numberId ).subscribe(res => this.container = res);
  }

}
