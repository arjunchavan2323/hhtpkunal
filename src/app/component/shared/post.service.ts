import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ipost } from './model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
baseurl:string=`${environment.baseurl}`
  constructor(private _http :HttpClient) { }

  getAllpost():Observable<ipost[]>{
    return this._http.get<ipost[]>(this.baseurl)
  }

  getsinglepost(id:number):Observable<ipost>{
    let singleposturl=`${this.baseurl}/${id}`
    return this._http.get<ipost>(singleposturl)
  }

  getpostupdate(post:ipost):Observable<ipost>{
    let updateurl=`${this.baseurl}/${post.id}`
    return this._http.patch<ipost>(updateurl, post)
  }

  getcreapost(post:ipost):Observable<ipost>{
    return this._http.post<ipost>(this.baseurl, post)
  }

  getdeletpost(id:number):Observable<ipost>{
    let deleturl=`${this.baseurl}/${id}`
    return this._http.delete<ipost>(deleturl)
  }
}
