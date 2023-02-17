export class Article { // make this model availale to other components
  
  // Copy of article.component.ts :

    // Declare variableNames:type (properties)
  votes:number;
  title:string;
  link:string;

    // Initialise the variables in the constructor
  constructor(title:string, link:string, votes?:number) { // The question mark denotes an optional param that may not be passed in
    this.title=title; // this.title = property, just "title" is the param in the constructor 
    this.link=link;
    this.votes=votes || 10; // tells constructor that either the value OR "10" can be taken in
   }

   voteUp():boolean // this and voteDown() are returning booleans (as false) simply to fix the issue or the page refreshing when these methods are called
   {
     this.votes ++;
     return false;
   }
   voteDown(): boolean
   {
     this.votes --;
     return false;
   }
}