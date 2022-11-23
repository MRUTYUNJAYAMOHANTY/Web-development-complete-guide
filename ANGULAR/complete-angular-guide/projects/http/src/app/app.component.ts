import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Post } from './posts.model';
import { PostService } from './posts.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  loadedPosts:Post[] = [];
  isFetching = false;
  error = null;
  private errorSub:Subscription;

  constructor(private http: HttpClient, private postsService:PostService) {}

  ngOnInit() {
   this.errorSub = this.postsService.error.subscribe(
      errorMessage =>{
        this.error = errorMessage;
      }
    )
   // this.fetchPosts();
   this.isFetching = true;
   this.postsService.fetchPosts().subscribe(posts=>{
    this.isFetching = false;
    this.loadedPosts = posts
   },error => {
    this.isFetching = false;
    this.error = error.message
  });
   this.postsService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.postsService.createAndSendPosts(postData.title,postData.content)
  }

  onFetchPosts() {
    // Send Http request
   // this.fetchPosts();
   //this.postsService.fetchPosts();
   this.isFetching = true;
   this.postsService.fetchPosts().subscribe(posts=>{
    this.isFetching = false;
    this.loadedPosts = posts
   },error => {
    this.isFetching = false;
      this.error = error.message
      console.log(error);
      
   });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(()=>{
      this.loadedPosts = [];
    })
  }
  onHandleError(){
    this.error = null
  }
  // private fetchPosts(){
  //   this.isFetching = true;
    ngOnDestroy(): void {
      this.errorSub.unsubscribe();
    }
    
}
