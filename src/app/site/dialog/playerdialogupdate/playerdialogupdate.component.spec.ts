import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerdialogupdateComponent } from './playerdialogupdate.component';

describe('PlayerdialogupdateComponent', () => {
  let component: PlayerdialogupdateComponent;
  let fixture: ComponentFixture<PlayerdialogupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerdialogupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerdialogupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
