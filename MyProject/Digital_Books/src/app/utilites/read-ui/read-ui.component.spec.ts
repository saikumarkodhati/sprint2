import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadUiComponent } from './read-ui.component';

describe('ReadUiComponent', () => {
  let component: ReadUiComponent;
  let fixture: ComponentFixture<ReadUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
