import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

   public data1 = [];
  constructor( private userData:UsersService) { }

  ngOnInit(): void {

this.userData.bioData()
    .subscribe(data => this.data1 = data); 
  }


  

  // public bioData = [
  //   {"id": 132935648,"node_id": "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=", "name": "boysenberry-repo-1",
  //   "full_name": "octocat/boysenberry-repo-1"},
  //   {"id": 132935655, "node_id": "JlcG9zaXRvcnkxMzI5MzU2NDg=","name": "senberry-repo-1",
  //   "full_name": "octocat/boysenberry-repo-1",}
  // ];
}
