import { Injectable } from '@angular/core';

import { Rekening } from './rekening.model';

@Injectable()
export class RekeningService {

  constructor() { }

  ambilDataRekening(): Promise<Rekening[]> {
    let hasil: Rekening[] = [
      new Rekening("R001", '00432017011', 'Tabungan M IRFAN'),
      new Rekening("R002", '00DH1985090', 'Giro M IRFAN')
    ]

    return new Promise(resolve => {
      setTimeout(() => resolve(hasil), 2000);
    })
  }

}
