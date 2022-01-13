import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient) { }

  imageUpload(formData: FormData) {
    return this.http.post(environment.apiUrl + 'upload/cover-image', formData);
  }
}
