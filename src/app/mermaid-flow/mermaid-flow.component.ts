import { Component, OnInit, OnDestroy, NgZone, Output, EventEmitter } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-mermaid-flow',
  templateUrl: './mermaid-flow.component.html',
  styleUrls: ['./mermaid-flow.component.scss'],
  preserveWhitespaces: true
})
export class MermaidFlowComponent implements OnInit, OnDestroy {
  private readonly externalFunctionName: string = "functionToCallIntoAngular"

  @Output() nodeClicked: EventEmitter<string> = new EventEmitter();


  constructor(zone: NgZone ) {
    // create a new global variable in the page
    window[this.externalFunctionName] = this.buildPublicCall(zone, this);
  }

  ngOnInit() {
    mermaid.initialize({
      theme: "forest",
      securityLevel: "loose"
    });
  }
  // generate a function that has the zone and "this"
  // captured in a closure.
  private buildPublicCall(zone: NgZone, flowComponent: MermaidFlowComponent): any {
    return function angularAppGlobalMethod( nodeId ) {
      // you can't call "this.increment( nodeId)" because
      // when the code is run on a click, "this" won't be
      // the right entity. When the function is constructed
      // "this" is the right entity, but it needs to captured
      // at the point of construction
      zone.run(() => { flowComponent.clickNode( nodeId ); });
    }
  }

  public clickNode( nodeId: any ): void {
    if ( ! nodeId ) nodeId = "*No node ID*";
    this.nodeClicked.emit( nodeId.toString() );
  }

  ngOnDestroy() {
    window[this.externalFunctionName] = null;
  }

}
