import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, Observable, Subject, takeUntil } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterseptoreService implements HttpInterceptor{
private _unsubscrip$:Subject<void>=new Subject<void>()
  constructor(private _loadservice :LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadservice.loadstatus.next(true)
   const Authtoken=`the bearer token for the local storage intil delete data form data base`

   const Authreq=req.clone({
    setHeaders:{
      'Authroised':Authtoken,
      "content-type":"application/json"
      
    }
   })

   return next.handle(Authreq)
   .pipe(
    delay(2000),
    takeUntil(this._unsubscrip$),
    finalize(() => {
      this._loadservice.loadstatus.next(false)
    })
   )
  }

  unsubscrip():void{
this._unsubscrip$.next()
this._unsubscrip$.complete()
  }  
}
