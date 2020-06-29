import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  names = ['Hamman','Bocci','Soloway','Duboin'];
  auction = [['','1N','p','2C'],['p','2D','p','3N'],['p','p','p','']]
}
