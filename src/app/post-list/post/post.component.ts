import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public postUrlId;
  post:any;
  postId:number;
  postTitle:string;
  postBody:string;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    let UrlId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.postUrlId = UrlId;
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.postUrlId}`).subscribe(res => {
    this.post = res;
    this.postId = this.post.id;
    this.postTitle = this.post.title;
    this.postBody = this.post.body;
    });
  }

  onUpdate() {
    this.http.put(`https://jsonplaceholder.typicode.com/posts/${this.postUrlId}`, JSON.stringify({
      id: this.postId,
      title: this.postTitle,
      body: this.postBody
    }),{headers: {"Content-type": "application/json; charset=UTF-8"}}).subscribe(res => {
      this.router.navigate(['']);
    });
  }

  onDelete() {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${this.postUrlId}`).subscribe(res => {
      this.router.navigate(['']);
    });
  }

}
