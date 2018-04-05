import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { TimingModel } from '../../models/timingModel';
import { Timings } from '../../assets/data/timings';

/*
  Generated class for the TimingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimingServiceProvider {

  
  openTimings: TimingModel[] = [];

  constructor(public http: Http) {
    
  }

  getTimings(): TimingModel[] {
    return Timings;
  }
}
