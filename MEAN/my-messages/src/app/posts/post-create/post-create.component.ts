import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  private mode = 'create';
  private postId :any;
  post:Post;
  constructor(public postsService: PostsService, public route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('postId')){
          this.mode = 'edit';
          this.postId = paramMap.get('postId');
          this.post = this.postsService.getPost(this.postId);
      }else{
        this.mode = 'create';
        this.postId = '';
      }
    });
  }
  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if(this.mode === 'create'){
      this.postsService.addPost(form.value.title,form.value.content);
    }else{ this.postsService.updtePost( 
      this.postId,
      form.value.title,
      form.value.content
    );}
    form.resetForm();
  }
}
