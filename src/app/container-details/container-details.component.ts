import { Component, OnInit } from '@angular/core';
import {Container} from '../container';
import {ContainerhttpService} from '../containerhttp.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-container-details',
  templateUrl: './container-details.component.html',
  styleUrls: ['./container-details.component.css']
})
export class ContainerDetailsComponent implements OnInit {
container: Container;
  constructor(public containerService: ContainerhttpService,
              private route: ActivatedRoute) { }

  ngOnInit() {
const id = this.route.snapshot.paramMap.get('id');
this.containerService.getContainer(id).subscribe(cont => this.container = cont);
  }

}
