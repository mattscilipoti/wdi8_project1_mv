// mms: This is an array of duplicates.  Can we make this a single instanc of each card?  When do we need it to be duplicated?
cardArray=[
    {text: "A", image: "images/1.png"},
    {text: "A", image: "images/1.png"},
    {text: "B", image: "images/2.jpg"},
    {text: "B", image: "images/2.jpg"},
    {text: "C", image: "images/3.jpg"},
    {text: "C", image: "images/3.jpg"},
    {text: "D", image: "images/4.jpg"},
    {text: "D", image: "images/4.jpg"},
    {text: "E", image: "images/5.jpg"},
    {text: "E", image: "images/5.jpg"},
    {text: "F", image: "images/6.jpg"},
    {text: "F", image: "images/6.jpg"}

];

clickedCard=[];

matchedCard=[];

clicks=20;

///////////////////////////////////////// SHUFFLE DECK
var shuffleDeck=function(){
  // Using the Fisher-Yates (Knuth) shuffle
  // mms: This a confusing initialization.  What value does "randomIndex" contain?
  // mms: I recommend you separate initialization with assignments and those without.
  // mms: Also, if you grab code from somewhere, put the source url here.
  var currentIndex = cardArray.length
  , temporaryValue
  , randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cardArray[currentIndex];
    cardArray[currentIndex] = cardArray[randomIndex];
    cardArray[randomIndex] = temporaryValue;
  }
} // mms: e.g. end shuffleDeck
// mms: if you move this "end shuffle DECK" comment up behind the closeing bracket, it will automatically move with the fucntion (as you copy/paste)
// mms: I also recommend that you use the actual name of the function (when you find/replace, it will update your comment).
// mms: And finally... if the function is so long you need to identify the end, it's probably too long (I don't think this one is too long)
///////////////////////////////////////// End shuffle DECK
  shuffleDeck();
  console.log(cardArray);
var board=document.getElementById("board");

for(var i=0; i<cardArray.length; i++){

  // appending cards to board
  var cardsBack=document.createElement("div");
  // mms: good use of classes
  cardsBack.classList.add("card");
  board.appendChild(cardsBack);

  // adding images to cardback
  var images=document.createElement("img");
  images.src = cardArray[i].image;
  images.className="image";
  cardsBack.appendChild(images);



  // Change color of cards on click
  cardsBack.addEventListener("click",function(){
  if (clicks>0){
    clicks--;
    console.log(clicks);
    document.getElementById('counter').innerHTML=clicks.toString();
    var card = this;
    if (clickedCard.length < 2){
     card.classList.add("image");
     // mms: watch your indentation.
     // mms: we discussed only adding "match" class once the cards actually match.
      card.classList.add("match"); // add class of match to all cards
      clickedCard.push(card.innerHTML);
      matchedCard.push(card);
      console.log("this is card" + card);

  console.log("this is clickedCard" + clickedCard);
      //// compares cards that are clicked on
      // mms: it looks like this is nested within `clickedCard.length < 2`
      //      will clickedCard.length ever equal 2, if we only reach this line if the length is < 2?
      if (clickedCard.length === 2){
        if (clickedCard[0] === clickedCard[1]){

          console.log("It's a match!");
            clickedCard=[];
            matchedCard=[];
        } else {
          console.log("It's not a match!")
          setTimeout(turnOffAllCards, 1000);
          for (i=0; i<matchedCard.length; i++){
            matchedCard[i].classList.remove("match");
          }
          matchedCard=[];
           // calls turnOffAllCards
        }
      } // close if statement
    } // close second if statement
    } // close click if statement
  }) // event listener
} // close for loop

function turnOffAllCards(){
  // mms: we are already working with these two chosen cards.  Can we pass them to here, instead of searching the DOM?
  var frontCards = document.querySelectorAll("div.image:not(.match)");
  for(var i = 0; i < frontCards.length; i++){
    frontCards[i].classList.remove("image");
    clickedCard=[];

  }

}
