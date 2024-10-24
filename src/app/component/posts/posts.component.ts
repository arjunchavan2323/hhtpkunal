import { Component, OnInit } from '@angular/core';
import { ipost } from '../shared/model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { concatMap } from 'rxjs';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
productobject!:ipost;
postid!:number
  constructor(private _route :ActivatedRoute,
    private _postservice :PostService,
    private _router :Router
  ) { }

  ngOnInit(): void {
    this._route.params
    .pipe(
      concatMap((myparam :Params) => {
        this.postid=+myparam['id']
        return this._postservice.getsinglepost(this.postid)
      })
    )
    .subscribe(res => {
      this.productobject=res
    })
  }

  onremove(id:number){
    this._postservice.getdeletpost(id)
    .subscribe(res => {
      console.log(res)
      this._router.navigate(['/post'])
    })
  }

}
