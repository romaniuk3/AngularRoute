import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factory-detail',
  templateUrl: './factory-detail.component.html',
  styleUrls: ['./factory-detail.component.css']
})
export class FactoryDetailComponent implements OnInit {

  public factoryId?: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.factoryId = id;
  }

  showWorkers() {
    this.router.navigate(['workers'], {relativeTo: this.route});
  }

  showProductTypes() {
    this.router.navigate(['products'], {relativeTo: this.route});
  }

}
