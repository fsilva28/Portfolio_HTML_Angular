import { Component, OnInit } from '@angular/core';
import { StatusOcorrenciaInterface } from '../statusocorrencia';
import { StatusocorrenciaService } from '../statusocorrencia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-statusocorrencias',
  templateUrl: './list-statusocorrencias.component.html',
  styleUrl: './list-statusocorrencias.component.css'
})
export class ListStatusocorrenciasComponent implements OnInit {
  statusocorrenciasList: StatusOcorrenciaInterface[] = [];
  statusocorrencia?: StatusOcorrenciaInterface = undefined;
  constructor(private service: StatusocorrenciaService) {
    
  }
  ngOnInit(): void {
    this.service.getAllStatusOcorrencia().then((data: Observable<StatusOcorrenciaInterface[]>) => {
      data.subscribe(list => {
        console.log('estou aqui');
        console.log(list);
        this.statusocorrenciasList = list;
      });

    }).catch(error =>
      {
        console.log(error);
      });
  }
}