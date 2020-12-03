import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaticoComponent } from './viatico.component';

describe('ViaticoComponent', () => {
  let component: ViaticoComponent;
  let fixture: ComponentFixture<ViaticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
