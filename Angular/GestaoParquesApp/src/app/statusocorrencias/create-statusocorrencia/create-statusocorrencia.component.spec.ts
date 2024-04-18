import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatusocorrenciaComponent } from './create-statusocorrencia.component';

describe('CreateStatusocorrenciaComponent', () => {
  let component: CreateStatusocorrenciaComponent;
  let fixture: ComponentFixture<CreateStatusocorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateStatusocorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStatusocorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
