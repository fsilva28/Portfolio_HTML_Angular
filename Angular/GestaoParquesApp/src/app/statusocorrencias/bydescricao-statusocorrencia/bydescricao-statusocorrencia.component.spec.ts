import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BydescricaoStatusocorrenciaComponent } from './bydescricao-statusocorrencia.component';

describe('BydescricaoStatusocorrenciaComponent', () => {
  let component: BydescricaoStatusocorrenciaComponent;
  let fixture: ComponentFixture<BydescricaoStatusocorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BydescricaoStatusocorrenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BydescricaoStatusocorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
