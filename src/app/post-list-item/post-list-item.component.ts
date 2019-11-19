import {Component, Input, OnInit} from '@angular/core';
import {PostItem} from '../post-item';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: PostItem;
  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.post.title;
  }
  getContent() {
    return this.post.content;
  }
  getLove() {
    return this.post.loveIts;
  }
  getDate() {
    return this.post.createdAt;
  }
  upvote() {
    this.post.loveIts++;
  }
  downvote() {
    this.post.loveIts--;
  }

}
