import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStatusocorrenciaComponent } from './delete-statusocorrencia.component';

describe('DeleteStatusocorrenciaComponent', () => {
  let component: DeleteStatusocorrenciaComponent;
  let fixture: ComponentFixture<DeleteStatusocorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteStatusocorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteStatusocorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
