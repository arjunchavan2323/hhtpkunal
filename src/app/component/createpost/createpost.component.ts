import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { concatMap } from 'rxjs';
import { PostService } from '../shared/post.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {
postid!:number;
postform!:FormGroup;
  constructor(private _route :ActivatedRoute,
    private _postservice :PostService,
    private _router :Router
  ) { }

  ngOnInit(): void {
    this.createallform()
    this._route.params
    .pipe(
      concatMap((myparam:Params) => {
        this.postid=+myparam['id']
     return this._postservice.getsinglepost(this.postid)
      })
    )
    .subscribe(res => {
      // console.log(res)
      if(this.postid){
this.postform.patchValue(res)
      }
    })
  }
createallform(){
    this.postform=new FormGroup({
     title:new FormControl(null),
     body:new FormControl(null)
    })
}

onsubmitbtn(){
let obj={
  ...this.postform.value,
  userId:Math.ceil(Math.random()* 10)
}
this._postservice.getcreapost(obj)
.subscribe(res => {
  console.log(res)
  this._router.navigate(['/post'])
})
}

updatepost(){
  let obj={
    ...this.postform.value,
    id:this.postid
  }
  this._postservice.getpostupdate(obj)
  .subscribe(res => {
    console.log(res)
    this._router.navigate(['/post'])
  })
}
}
