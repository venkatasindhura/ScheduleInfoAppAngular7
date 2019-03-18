import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  messagefromservice: string;
  name = '';
  // ActivatedRoute
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }
  ngOnInit() {
    // this.route.snapshot.params['name'];
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage() {
    this.service.executeTodoBeanService().subscribe(
      response =>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
    // console.log('get welcome message');
    console.log('last line of welcome message');
  }
  getWelcomeMessagewithParameter() {
    this.service. executeTodoBeanServicewithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
    // console.log('get welcome message');
    console.log('last line of welcome message');
  }
  handleSuccessfulResponse(response: any) {
    this.messagefromservice = response.message;
    console.log(response);
    console.log(response.message);
  }
  handleErrorResponse(error: any){
    console.log(error);
    console.log(error.error);
    this.messagefromservice = error;
  }
}
