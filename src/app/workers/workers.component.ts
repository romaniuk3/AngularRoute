import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers = [
    {'id': 1, 'name': 'Oleh'},
    {'id': 2, 'name': 'Andrew'},
    {'id': 3, 'name': 'Ivan'}
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  workerHandler(worker: any) {
    this.router.navigate([worker.id], {relativeTo: this.route});
  }

}
