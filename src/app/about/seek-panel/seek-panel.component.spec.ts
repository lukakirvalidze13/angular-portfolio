import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekPanelComponent } from './seek-panel.component';

describe('SeekPanelComponent', () => {
  let component: SeekPanelComponent;
  let fixture: ComponentFixture<SeekPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeekPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeekPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
