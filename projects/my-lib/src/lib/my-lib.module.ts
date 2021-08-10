import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
  ],
  providers:[
    CookieService
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
