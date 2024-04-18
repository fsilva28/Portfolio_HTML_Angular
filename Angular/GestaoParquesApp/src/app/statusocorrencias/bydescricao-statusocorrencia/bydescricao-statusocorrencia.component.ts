import { Component, OnInit } from '@angular/core';
import { StatusOcorrenciaInterface } from '../statusocorrencia';
import { StatusocorrenciaService } from '../statusocorrencia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bydescricao-statusocorrencia',
  templateUrl: './bydescricao-statusocorrencia.component.html',
  styleUrl: './bydescricao-statusocorrencia.component.css'
})
export class BydescricaoStatusocorrenciaComponent {
  statusocorrenciasList: StatusOcorrenciaInterface[] = [];
  statusocorrencia?: StatusOcorrenciaInterface = undefined;
  userInput: string = '';


  constructor(private service: StatusocorrenciaService) { }

  async filterStatusOcorrencias(): Promise<void> {
    if (this.userInput.trim() !== '') {
      try {
        const observablePromise: Promise<Observable<StatusOcorrenciaInterface[]>> = this.service.getStatusOcorrenciaByDescricao(this.userInput);
        const observable: Observable<StatusOcorrenciaInterface[]> = await observablePromise;

        observable.subscribe(
          (list: StatusOcorrenciaInterface[]) => {
            this.statusocorrenciasList = list;
          },
          (error) => {
            console.error('Erro ao filtrar Status Ocorrência por descrição:', error);
          }
        );
      } catch (error) {
        console.error('Erro ao filtrar Status Ocorrência por descrição:', error);
      }
    }
  }
}
