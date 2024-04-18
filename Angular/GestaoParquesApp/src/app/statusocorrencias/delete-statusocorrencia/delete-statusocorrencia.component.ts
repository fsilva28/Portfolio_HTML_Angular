import { Component, OnInit } from '@angular/core';
import { StatusOcorrenciaInterface } from '../statusocorrencia';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusocorrenciaService } from '../statusocorrencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-statusocorrencia',
  templateUrl: './delete-statusocorrencia.component.html',
  styleUrl: './delete-statusocorrencia.component.css'
})
export class DeleteStatusocorrenciaComponent implements OnInit {
  statusOcorrencia: StatusOcorrenciaInterface;
  deleteForm: FormGroup;
  mostrarDetalhes: boolean = false;

  constructor(
    private statusocorrenciaService: StatusocorrenciaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ){
    this.deleteForm = this.formBuilder.group({
      idStatusOcorrencia: [0, [Validators.required]],
      descricaoStatus: ['', [Validators.required]]
    })
    this.statusOcorrencia = {
      idStatusOcorrencia: 0,
      descricaoStatus: ''
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const id = +params['id'];
      (await this.statusocorrenciaService.getStatusOcorrenciaById(id)).subscribe(status => {
        this.statusOcorrencia = status;
      });
    });
  }

    confirmDelete() {
      const confirmDelete = confirm(`Deseja realmente eliminar o seguinte Status Ocorrência?\n\nid: ${this.statusOcorrencia.idStatusOcorrencia}\nDescrição: ${this.statusOcorrencia.descricaoStatus}`);
      if (confirmDelete) {
        this.delete();
      }
    }

  delete() {
    console.log(this.statusOcorrencia);
    this.statusocorrenciaService.deleteStatusOcorrencia(this.statusOcorrencia.idStatusOcorrencia).then(data => {
      data.subscribe(data => {
        console.log('Status de Ocorrência eliminado com sucesso', data);
        alert('Status Ocorrência foi eliminado');
        this.deleteForm.reset();
        this.statusOcorrencia = { idStatusOcorrencia: 0, descricaoStatus: ''};
      })

        this.router.navigate(['/statusocorrencias']);

    }).catch(error => {
      console.log('Erro ao eliminar Status de Ocorrência', error);
      alert('Não foi possível eliminar o Status de Ocorrência');
      this.router.navigate(['/statusocorrencia']);
    });
  }
}
