import { Component } from '@angular/core';
import { Article } from './article/article.model'; // import model 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Declare articles array of type Article
  articles:Article[];

  constructor()
  {
    // Create 3 new articles in article array
    this.articles=[
      new Article('Angular', 'https://angular.io',5),
      new Article('Google', 'https://google.ie',3),
      new Article('TikTok', 'https://tiktok.com',1)
    ];
  }
  
  addArticle(title:HTMLInputElement, link:HTMLInputElement):Boolean //HTMLInputElement is the #variableName in .html
  // MethodName(parameter:type, parameter:type):returnType
  {

    this.articles.push(new Article(title.value, link.value, 0)); // push to article.comp.ts when button is clicked

    // Clear input fields after link's submitted
    title.value=''; link.value='';
    console.log("Adding Article Title :",title.value, "and adding Article Link :", link.value );
    return false;
  }

  sortedArticles() : Article[] {
    return this.articles.sort((a:Article, b:Article) => b.votes - a.votes)
  }

}
