import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Harry-Game-UI';

  constructor(private backend:AppServiceService) { }
  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.backend.getGameState()
      .subscribe( response => {
        console.log(response)
      }, (error => {
        console.error(error);
      }));
  }
}
