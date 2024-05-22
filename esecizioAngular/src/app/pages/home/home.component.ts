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

  ngOnInit(){

  this.getPost()

  }

  async getPost(){
    const response= await fetch("../../../assets/db.json")
    const posts = <IJsonContent> await response.json()

    this.postArr = posts.posts
  }
}
