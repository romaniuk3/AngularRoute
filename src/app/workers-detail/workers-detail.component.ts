import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workers-detail',
  templateUrl: './workers-detail.component.html',
  styleUrls: ['./workers-detail.component.css']
})
export class WorkersDetailComponent implements OnInit {

  public workerId?: number;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.workerId = id;
  }

}
