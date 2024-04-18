import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusocorrenciasComponent } from './statusocorrencias.component';
import { CreateStatusocorrenciaComponent } from './create-statusocorrencia/create-statusocorrencia.component';
import { UpdateStatusocorrenciaComponent } from './update-statusocorrencia/update-statusocorrencia.component';
import { DeleteStatusocorrenciaComponent } from './delete-statusocorrencia/delete-statusocorrencia.component';
import { ReadStatusocorrenciaComponent } from './read-statusocorrencia/read-statusocorrencia.component';
import { ListStatusocorrenciasComponent } from './list-statusocorrencias/list-statusocorrencias.component';
import { BydescricaoStatusocorrenciaComponent } from './bydescricao-statusocorrencia/bydescricao-statusocorrencia.component';

const routes: Routes = [
  { path: '', component: StatusocorrenciasComponent },
  { path: 'create-statusocorrencia', component: CreateStatusocorrenciaComponent },
  { path: 'delete-statusocorrencia/:id', component: DeleteStatusocorrenciaComponent },
  { path: 'read-statusocorrencia', component: ReadStatusocorrenciaComponent },
  { path: 'update-statusocorrencia/:id', component: UpdateStatusocorrenciaComponent },
  { path: 'list-statusocorrencias', component: ListStatusocorrenciasComponent },
  { path: 'bydescricao-statusocorrencia/descricaoStatus', component: BydescricaoStatusocorrenciaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusocorrenciasRoutingModule { }
