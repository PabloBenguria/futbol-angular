import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoComponent } from './partido.component';

describe('PartidoComponent', () => {
  let component: PartidoComponent;
  let fixture: ComponentFixture<PartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
