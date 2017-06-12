import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails: Array<any>;

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json())
      .subscribe(res => this.emails = res);
  }
}
