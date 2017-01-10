import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Rekening } from './rekening.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RekeningService {

  private serverURL = 'api/rekening/';

  constructor(private http: Http) { }

  ambilDataRekening(): Promise<Rekening[]> {
    return this.http.get(this.serverURL)
    .toPromise()
    .then(hasil => hasil.json() as Rekening[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('Error occured : ' + error);
    return Promise.reject(error.message || error);
  }

}
