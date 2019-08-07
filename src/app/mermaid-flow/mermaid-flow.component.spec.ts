import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MermaidFlowComponent } from './mermaid-flow.component';

describe('MermaidFlowComponent', () => {
  let component: MermaidFlowComponent;
  let fixture: ComponentFixture<MermaidFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MermaidFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MermaidFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
