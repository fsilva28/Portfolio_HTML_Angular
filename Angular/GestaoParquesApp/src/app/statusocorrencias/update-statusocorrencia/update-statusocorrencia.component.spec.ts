import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatusocorrenciaComponent } from './update-statusocorrencia.component';

describe('UpdateStatusocorrenciaComponent', () => {
  let component: UpdateStatusocorrenciaComponent;
  let fixture: ComponentFixture<UpdateStatusocorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateStatusocorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateStatusocorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
