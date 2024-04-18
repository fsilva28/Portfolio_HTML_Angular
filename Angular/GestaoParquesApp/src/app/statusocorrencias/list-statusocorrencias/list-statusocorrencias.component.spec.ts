import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatusocorrenciasComponent } from './list-statusocorrencias.component';

describe('ListStatusocorrenciasComponent', () => {
  let component: ListStatusocorrenciasComponent;
  let fixture: ComponentFixture<ListStatusocorrenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStatusocorrenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListStatusocorrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
