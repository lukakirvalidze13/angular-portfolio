import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivedPanelComponent } from './lived-panel.component';

describe('LivedPanelComponent', () => {
  let component: LivedPanelComponent;
  let fixture: ComponentFixture<LivedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivedPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
