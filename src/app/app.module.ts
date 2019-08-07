import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MermaidFlowComponent } from './mermaid-flow/mermaid-flow.component';

@NgModule({
  declarations: [
    AppComponent,
    MermaidFlowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
