import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { IJsonContent } from '../../Models/i-json-content';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {

postArr:iPost[] = [];

ngOnInit(){
  this.getPosts().then(()=>{
    this.postArr = this.getInactivePosts()
    console.log(this.postArr)
  })
}

async getPosts(){
  const response= await fetch("../../../assets/db.json")
  const posts = <IJsonContent> await response.json()

  this.postArr = posts.posts

  console.log();

}

getInactivePosts(){
  return this.postArr.filter(post => post.active === false)
}
}
