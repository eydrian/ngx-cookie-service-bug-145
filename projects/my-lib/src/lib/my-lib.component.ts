import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      Cookie Value {{cookieValue}}
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {
  cookieValue: string;

  constructor(private cookieService: CookieService) { 
    this.cookieService.set('Test', 'Hello World');
    this.cookieValue = this.cookieService.get('Test');
  }

  ngOnInit(): void {
  }

}
