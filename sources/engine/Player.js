
'use strict'
 
/**
* Player class.
*/
 
 class Player{
	 
	 constructor(id) {
	 this.id=id;
	 this.pseudo = ' ';	 
	 this.score = 0 ;	 
		 
	 }
	 //fonction permettant de retourner le score du joueur
	 getScore(){
		 //TODO
		 }
	 //fonction permettant de retourner le pseudo du joueur
     getpseudo(){
		 //TODO
		 }
     //retourne la reponse du player 
     reponse(){
	  //TODO
	  console.log('Yes ! ça marche je recois la réponse');
	 }
}

module.exports = Player;
