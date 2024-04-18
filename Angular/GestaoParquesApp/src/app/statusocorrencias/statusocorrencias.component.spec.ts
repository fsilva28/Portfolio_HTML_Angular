import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusocorrenciasComponent } from './statusocorrencias.component';

describe('StatusocorrenciasComponent', () => {
  let component: StatusocorrenciasComponent;
  let fixture: ComponentFixture<StatusocorrenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusocorrenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusocorrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
