import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content-details',
  standalone: true,
  imports: [],
  templateUrl: './content-details.component.html',
  styleUrl: './content-details.component.css'
})
export class ContentDetailsComponent implements OnInit {
  constructor(
    private route:ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value.get("id")))
  }

}
