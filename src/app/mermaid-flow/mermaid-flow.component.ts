import { Component, OnInit } from '@angular/core';
import * as mermaid from "mermaid";

@Component({
  selector: 'app-mermaid-flow',
  templateUrl: './mermaid-flow.component.html',
  styleUrls: ['./mermaid-flow.component.scss'],
  preserveWhitespaces: true
})
export class MermaidFlowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    mermaid.default.initialize({
      theme: "forest",
      securityLevel: "loose"
  });
  }

}
