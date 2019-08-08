import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sending Mermaid Clicks to Angular Demo';
  count: number = 0;
  countB: number = 0;


  constructor() {
  }

  public increment( nodeId: string ): void {
    if ( nodeId.toString() === "A") {
    this.count++;
    }
    else {
      this.countB++;
    }
  }

}
