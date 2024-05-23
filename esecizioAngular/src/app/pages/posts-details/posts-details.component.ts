import { iPost } from './../../Models/i-post';
import { Component } from '@angular/core';
import { IJsonContent } from '../../Models/i-json-content';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrl: './posts-details.component.scss'
})
export class PostsDetailsComponent {

postArr:iPost[] = []

  async getPosts(){
    const response= await fetch("../../../assets/db.json")
    const posts = <IJsonContent> await response.json()

    this.postArr = posts.posts

    console.log();

  }

currentPost!:iPost

constructor(
  private route:ActivatedRoute,//contiene metodi ed informazioni per gestire la rotta in cui mi trovo
){}


ngOnInit(){
this.getPosts().then(()=>{
    this.route.params.subscribe((params:any) => {//ottengo i parametri dalla rotta

        console.log(params);

        let postTrovato = this.postArr.find(p => p.id == params.id)//cerco la pizza il cui id è uguale all'id trovato nella rotta

        console.log(postTrovato);


        if(postTrovato){//controllo che la pizza esista
          this.currentPost = postTrovato//visto che esiste salvo il dato nella proprietà, in questo modo poterò mostrare il dettaglio della pizza nell'html
        }
    })
  })

  }

}
