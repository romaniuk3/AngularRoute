import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  factories = [
    {'id': 1, 'type': '4'},
    {'id': 2, 'type': '5'},
    {'id': 3, 'type': '6'}
  ]

  constructor(private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
  }

  showWorkers() {
    this.router.navigate(['workers'], {relativeTo: this.route});
  }

  showFactories(factory: any) {
    this.router.navigate([factory.id], {relativeTo: this.route});
  }

  showProductTypes() {
    this.router.navigate(['products'], {relativeTo: this.route});
  }

}
