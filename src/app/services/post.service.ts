import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})

// Post Service to connect our CRUD to MangoDB.
export class PostService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  addPost(country: string, capital: string, population: string): Observable<any> {
    const post: Post = {country: country, capital: capital, population: population};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getPost(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updatePost(id:String, country: string, capital: string, population: string): Observable<any> {
    const post: Post = {country: country, capital: capital, population: population};
  return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }
}
