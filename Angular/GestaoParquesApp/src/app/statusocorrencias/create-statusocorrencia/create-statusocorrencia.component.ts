import { Component } from '@angular/core';
import { StatusOcorrenciaInterface } from '../statusocorrencia';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusocorrenciaService } from '../statusocorrencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-statusocorrencia',
  templateUrl: './create-statusocorrencia.component.html',
  styleUrl: './create-statusocorrencia.component.css'
})
export class CreateStatusocorrenciaComponent {
  statusOcorrencia: StatusOcorrenciaInterface;
  createForm: FormGroup;

  constructor(private service: StatusocorrenciaService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.createForm = this.formBuilder.group({
      idStatusOcorrencia: [0, [Validators.required]],
      descricaoStatus: ['', [Validators.required, Validators.minLength(1)]]
    })
    this.statusOcorrencia = {
      idStatusOcorrencia: 0,
      descricaoStatus: ''
    }
  }

  create() {
    console.log(this.statusOcorrencia);
    this.service.createStatusOcorrencia(this.statusOcorrencia).then(data =>{
      data.subscribe(data => {
        console.log('Status Ocorrência adicionado com sucesso:', data);
        alert('Status adicionado');
      });
    }).then(()=>{
      this.createForm.reset();
      this.statusOcorrencia = {
        idStatusOcorrencia : 0,
        descricaoStatus : ''
      }

      this.router.navigate(['/statusocorrencias']);

    }).catch(error => {
      console.log('Status Ocorrência não pôde ser criado', error);
      alert('Status não pôde ser adicionado')
    });
  }
}
