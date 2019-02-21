import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'


import { Clinic } from './Clinic'
import { HttpErrorHandler, HandleError } from '../http-error.service'

@Injectable()
export class ClinicService {
  private handleError: HandleError

  constructor(private http: HttpClient, HttpErrorService: HttpErrorHandler) {
    this.handleError = HttpErrorService.createHandleError("ClinicService")
  }

  getClinic(): Observable<Clinic[]> {
    return this.http
      .get<Clinic[]>('http://localhost:8000/api/clinic')
      .pipe(catchError(this.handleError('getClinic', [])))
  }


}
