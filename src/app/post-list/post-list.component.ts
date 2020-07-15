import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  Posts :any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.Posts = res;
    });
  }

  openPost(post) {
    this.router.navigate(['/posts', post.id]);
  }

}
