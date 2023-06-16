import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaTableComponent } from './tarea-table.component';

describe('TareaTableComponent', () => {
  let component: TareaTableComponent;
  let fixture: ComponentFixture<TareaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
