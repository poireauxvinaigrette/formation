import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';


@Component({
  selector: 'app-pagenotfound-interface',
  templateUrl: './pagenotfound-interface.component.html',
  styleUrls: ['./pagenotfound-interface.component.scss']
})
export class PagenotfoundInterfaceComponent implements OnInit {

  posts: any[];
  posts$: Observable<any>;
  comment$: Observable<any>;
  postcommente$: Observable<any>;
commonHeaders = ['id', 'body'];
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts');
    this.comment$ = this.http.get('https://jsonplaceholder.typicode.com/comments');

    this.postcommente$ = forkJoin(this.posts$, this.comment$);

    this.postcommente$.subscribe( (data) => console.log(data));
/*
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data: any[]) => this.posts = data
    );
*/
  }

}
