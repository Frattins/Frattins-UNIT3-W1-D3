import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { IJsonContent } from '../../Models/i-json-content';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {
[x: string]: any|string;

  postArr:iPost[] = [];

  ngOnInit(){
    this.getPosts().then(()=>{
      this.postArr = this.getActivePosts()
      console.log(this.postArr)
    })
  }



async getPosts(){
  const response= await fetch("../../../assets/db.json")
  const posts = <IJsonContent> await response.json()

  this.postArr = posts.posts

  console.log();

}

getActivePosts(): iPost[] {
  return this.postArr.filter(post => post.active === true);
}
}
