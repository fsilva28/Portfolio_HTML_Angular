import { Component, OnInit } from '@angular/core';
import { StatusOcorrenciaInterface } from '../statusocorrencia';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusocorrenciaService } from '../statusocorrencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-statusocorrencia',
  templateUrl: './update-statusocorrencia.component.html',
  styleUrl: './update-statusocorrencia.component.css'
})
export class UpdateStatusocorrenciaComponent implements OnInit {
  statusOcorrencia: StatusOcorrenciaInterface;
  updateForm: FormGroup;

  constructor(
    private statusocorrenciaService: StatusocorrenciaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.updateForm = this.formBuilder.group({
      idStatusOcorrencia: [0, [Validators.required]],
      descricaoStatus: ['', [Validators.required]] 
    });
    this.statusOcorrencia = {
      idStatusOcorrencia: 0,
      descricaoStatus: ''
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.statusOcorrencia.idStatusOcorrencia = id;

      this.statusocorrenciaService.getStatusOcorrenciaById(id).then(data => {
        data.subscribe(data=>{
          this.statusOcorrencia = data;
        })
      })
    });
  }
  update() {
    console.log(this.statusOcorrencia)
    const id = this.statusOcorrencia.idStatusOcorrencia ?? 0
    this.statusocorrenciaService.updateStatusOcorrencia(id, this.statusOcorrencia).then(data => {
      data.subscribe(data=> {
        console.log('Status Ocorrência actualizado com sucesso', data);
        alert('Status Ocorrência foi actualizado');
        this.updateForm.reset();
        this.statusOcorrencia = { idStatusOcorrencia: 0, descricaoStatus: ''};
      })

      this.router.navigate(['/statusocorrencias']);

    }).catch(error => {
      console.log('Erro ao actualizar Status Ocorrência', error);
      alert('Não foi possível actualizar o Status Ocorrência');
    });
  }
}
