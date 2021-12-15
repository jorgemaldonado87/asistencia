//service to connect with database using different methods
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


//injectable decorator
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  //async metho to get data from database
  async get(url: string, element: any) {
    console.log(element);

    //assign every element to httpParams element
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: "sdadsa"
    };

    //transform element to httpParams
    const params = new HttpParams({
      fromObject: element
    });
    return await this.http.get(environment.ip + url, {
      headers: httpOptions.headers,
      params: params
    }).toPromise();
  }

    //async metho to get data from database
    async post(url: string, element: any) {

      //assign every element to httpParams element
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: element
      };

      return await this.http.post(environment.ip + url, httpOptions).toPromise();
    }

}
