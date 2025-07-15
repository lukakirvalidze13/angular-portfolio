import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiedPanelComponent } from './studied-panel.component';

describe('StudiedPanelComponent', () => {
  let component: StudiedPanelComponent;
  let fixture: ComponentFixture<StudiedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudiedPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
