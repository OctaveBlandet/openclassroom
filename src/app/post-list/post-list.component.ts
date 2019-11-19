import {Component, Input, OnInit} from '@angular/core';
import {PostItem} from '../post-item';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts;
  postsObjects: Array<PostItem> = [];

  constructor() {
  }

  ngOnInit() {
    this.posts.forEach((post) => {
      this.postsObjects.push(new PostItem(post.title, post.content, post.loveIts, post.created_at));
    });
    console.log(this.postsObjects);
  }
}

