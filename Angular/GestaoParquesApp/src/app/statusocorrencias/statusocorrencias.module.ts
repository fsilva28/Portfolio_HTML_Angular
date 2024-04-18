import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusocorrenciasRoutingModule } from './statusocorrencias-routing.module';
import { StatusocorrenciasComponent } from './statusocorrencias.component';
import { CreateStatusocorrenciaComponent } from './create-statusocorrencia/create-statusocorrencia.component';
import { UpdateStatusocorrenciaComponent } from './update-statusocorrencia/update-statusocorrencia.component';
import { ReadStatusocorrenciaComponent } from './read-statusocorrencia/read-statusocorrencia.component';
import { ListStatusocorrenciasComponent } from './list-statusocorrencias/list-statusocorrencias.component';
import { DeleteStatusocorrenciaComponent } from './delete-statusocorrencia/delete-statusocorrencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BydescricaoStatusocorrenciaComponent } from './bydescricao-statusocorrencia/bydescricao-statusocorrencia.component';


@NgModule({
  declarations: [
    StatusocorrenciasComponent,
    CreateStatusocorrenciaComponent,
    UpdateStatusocorrenciaComponent,
    ReadStatusocorrenciaComponent,
    ListStatusocorrenciasComponent,
    DeleteStatusocorrenciaComponent,
    BydescricaoStatusocorrenciaComponent
  ],
  imports: [
    CommonModule,
    StatusocorrenciasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StatusocorrenciasModule { }
