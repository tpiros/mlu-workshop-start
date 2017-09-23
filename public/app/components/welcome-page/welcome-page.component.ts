import { Component } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  styleUrls: ['./app/components/welcome-page/welcome-page.css'],
  templateUrl: '/app/components/welcome-page/welcome-page.html'
})

export class WelcomePageComponent {
  private message: string;
  constructor(private http: Http) {
    this.http.get('/api')
    .map(apiResponse => apiResponse = apiResponse.json())
    .subscribe(apiResponse => this.message = apiResponse);
  }
}
