import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialSelectorComponent } from './radial-selector.component';

describe('RadialSelectorComponent', () => {
  let component: RadialSelectorComponent;
  let fixture: ComponentFixture<RadialSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadialSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadialSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
