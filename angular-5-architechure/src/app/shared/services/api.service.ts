import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthServerProvider } from './auth.jwt.service';

@Injectable()
export class ApiService {
  constructor(
    private http: Http,
    private jwtService: AuthServerProvider
  ) {}

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      // headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
      headersConfig['X-API-KEY'] = `${this.jwtService.getToken()}`;
    }
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params })
    .catch(this.formatErrors)
    .map((res: Response) => {
      if(res.status){
        return res; 
      }
      else 
        throw res;
    });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    console.log("post", JSON.stringify(body));

    return this.http.post(
      `${environment.api_url}${path}`,
      body,
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => {
      
      var response = res.json();
      if (response.status){
        return response;
      }
      else
        throw response;
    }
  
    );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }
}
