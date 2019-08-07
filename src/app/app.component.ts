import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mac';
  count = 0;

  constructor(zone: NgZone) {
    window["testFunction"] = this.buildPublicCall(zone, this);
  }

  public Increment(): void {
    this.count++;
  }

  private buildPublicCall(zone: NgZone, appComponent: AppComponent): any {
    return function angularAppGlobalMethod() {
      zone.run(() => { appComponent.Increment(); });
    }
  }
}
