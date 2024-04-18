import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadStatusocorrenciaComponent } from './read-statusocorrencia.component';

describe('ReadStatusocorrenciaComponent', () => {
  let component: ReadStatusocorrenciaComponent;
  let fixture: ComponentFixture<ReadStatusocorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadStatusocorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadStatusocorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
