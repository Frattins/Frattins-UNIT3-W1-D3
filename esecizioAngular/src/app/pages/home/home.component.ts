import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { IJsonContent } from '../../Models/i-json-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postArr:iPost[] = [];
  firstPost!:iPost;
  randomPosts:iPost[] = [];

  ngOnInit(){

    this.getPosts().then(()=>{

      let firstPost = this.getFirstPost()

      if(firstPost){
        this.firstPost = firstPost
      }

      this.randomPosts = this.getRandomPosts()

    })
  }

  async getPosts(){
    const response= await fetch("../../../assets/db.json")
    const posts = <IJsonContent> await response.json()

    this.postArr = posts.posts
  }

    getFirstPost(){
      return this.postArr.shift()
    }

    getRandomPosts(): iPost[] {
      const shuffled = [...this.postArr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    }
  }

