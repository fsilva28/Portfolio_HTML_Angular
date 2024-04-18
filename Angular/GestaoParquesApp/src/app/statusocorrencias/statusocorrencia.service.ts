import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { StatusOcorrenciaInterface } from './statusocorrencia'

@Injectable({
  providedIn: 'root'
})
export class StatusocorrenciaService {

  apiUrl: string="";

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + "StatusOcorrenciums";
   }

   async getAllStatusOcorrencia():Promise<Observable<StatusOcorrenciaInterface[]>>{
    return await this.httpClient.get<StatusOcorrenciaInterface[]>(this.apiUrl);
   }

   async getStatusOcorrenciaById(id: number): Promise<Observable<StatusOcorrenciaInterface>>{
    return this.httpClient.get<StatusOcorrenciaInterface>(this.apiUrl + "/" + id); //return observable
  }

  async getStatusOcorrenciaByDescricao(descricaoStatus: string): Promise<Observable<StatusOcorrenciaInterface[]>> {
    return this.httpClient.get<StatusOcorrenciaInterface[]>(`${this.apiUrl}/GetStatusOcorrenciaByDescricao/${descricaoStatus}`);
  }

   async createStatusOcorrencia(statusOcorrenciaBody: any): Promise<Observable<StatusOcorrenciaInterface>> {
    console.log(statusOcorrenciaBody);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return await this.httpClient.post<StatusOcorrenciaInterface>(this.apiUrl, statusOcorrenciaBody, httpOptions);
   }

   async updateStatusOcorrencia(id: number, body: any): Promise<Observable<StatusOcorrenciaInterface>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.put<StatusOcorrenciaInterface>(this.apiUrl + "/" + id, body, httpOptions);
   }

   async deleteStatusOcorrencia(id: number): Promise<Observable<StatusOcorrenciaInterface>>{
    return this.httpClient.delete<StatusOcorrenciaInterface>(this.apiUrl + "/" + id);
   }
}
