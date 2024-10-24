import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { ipost } from '../shared/model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
productinfo:Array<ipost>=[]
  constructor(private _postservice :PostService) { }

  ngOnInit(): void {
    this._postservice.getAllpost()
    .subscribe(res => {
      // console.log(res)
      this.productinfo=res
    })
  }

}
