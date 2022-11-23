import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./posts.model";
import { catchError, map, tap } from 'rxjs/operators';
import { Subject,throwError } from "rxjs";

@Injectable({providedIn:'root'})

export class PostService {
error = new Subject<string>();

constructor(private http: HttpClient){}

 createAndSendPosts(title:string,content:string){
    const postData:Post ={title:title, content:content}
    this.http.post<{name:string}>('https://ng-complete-guide-acb6e-default-rtdb.firebaseio.com/posts.json' 
    , postData,
    {
      observe: 'response'
    }).subscribe( responseData => {
      console.log(responseData);
    }, error => {
      this.error.next(error.message)
    }
    )
 }

 fetchPosts(){
   let searchParams = new HttpParams();
   searchParams = searchParams.append('print','pretty');
   searchParams = searchParams.append('custom','key');
    return this.http.get<{[key:string]: Post}>('https://ng-complete-guide-acb6e-default-rtdb.firebaseio.com/posts.json',
    {
      headers: new HttpHeaders({'Custom-Header':'Hello'}),
     // params: new HttpParams().set('print','pretty') // sending single params
       params:searchParams,
       responseType:'json'
    })
    // using pipe & observable operator we transform data
    .pipe(
       map(responseData => {
        const postArray:Post[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postArray.push({...responseData[key], id:key})
          }
        }
        return postArray;
       }),
       catchError(errorResponse => {
          // send analytics to server
          return throwError(errorResponse)
       })
    );
  }
  deletePosts(){
    return this.http.delete('https://ng-complete-guide-acb6e-default-rtdb.firebaseio.com/posts.json',
    {
      observe:'events',
      responseType:'json'
    }).pipe(
      tap(event =>{
        console.log(event);
        if(event.type === HttpEventType.Sent){
        // ....
        }
        if(event.type === HttpEventType.Response){
          console.log(event.body);
          
        }
      })
    );
  }
 }
