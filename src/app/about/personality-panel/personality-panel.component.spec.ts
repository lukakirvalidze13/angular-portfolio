import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityPanelComponent } from './personality-panel.component';

describe('PersonalityPanelComponent', () => {
  let component: PersonalityPanelComponent;
  let fixture: ComponentFixture<PersonalityPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalityPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
