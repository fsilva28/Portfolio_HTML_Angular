import { Component } from '@angular/core';
import { StatusOcorrenciaInterface } from '../statusocorrencia';
import { StatusocorrenciaService } from '../statusocorrencia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-statusocorrencia',
  templateUrl: './read-statusocorrencia.component.html',
  styleUrl: './read-statusocorrencia.component.css'
})
export class ReadStatusocorrenciaComponent {
    idStatusOcorrencia: number = 0;
    statusOcorrencia: StatusOcorrenciaInterface | undefined;
  
    constructor(private service: StatusocorrenciaService) {}
  
    async buscarStatus(): Promise<void> {
      if (!this.idStatusOcorrencia) {
        alert('Por favor, insira um ID válido.');
        return;
      }
    
      try {
        const observablePromise: Promise<Observable<StatusOcorrenciaInterface>> = this.service.getStatusOcorrenciaById(this.idStatusOcorrencia);
        const observable: Observable<StatusOcorrenciaInterface> = await observablePromise;
        
        observable.subscribe(
          (data: StatusOcorrenciaInterface) => {
            this.statusOcorrencia = data;
          },
          (error) => {
            console.error('Erro ao buscar Status Ocorrência:', error);
          }
        );
      } catch (error) {
        console.error('Erro ao buscar Status Ocorrência:', error);
      }
    }
}
