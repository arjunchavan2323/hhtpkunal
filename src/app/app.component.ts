import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'httpjd';

  isloader:boolean=false


  constructor(private _loader :LoaderService){}
  ngOnInit(): void {
    this._loader.loadstatus
    .subscribe(res => {
      this.isloader=res
    })
    
  }
}
