
var Card = function(uid){
  this.uid = uid;
  this.shoe = true;
};

var shoeArr = [];

var $body = $('body');
var $shoe = $('#shoe');

//Create 52 objects/////////////////////////////////

for(var i = 0; i < 312; i++){
  var cardObj = new Card(i)
  shoeArr.push(cardObj);
};

console.log(shoeArr);
////////////////////////////////////////////////
//Assign Suits//////////////////////////////////
for(var i = 0; i < shoeArr.length; i+=4){
  shoeArr[i].suit = 'spades';
}
for(var i = 1; i < shoeArr.length; i+=4){
  shoeArr[i].suit = 'diamonds';
}
for(var i = 2; i < shoeArr.length; i+=4){
  shoeArr[i].suit = 'clubs';
}
for(var i = 3; i < shoeArr.length; i+=4){
  shoeArr[i].suit = 'hearts';
}
///////////////////////////////////////////////
//Assign Val///////////////////////////////////
for(var i = 0; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'ace';
  shoeArr[i].pointVal = 11;
}
for(var i = 1; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'two';
  shoeArr[i].pointVal = 2;
}
for(var i = 2; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'three';
  shoeArr[i].pointVal = 3;
}
for(var i = 3; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'four';
  shoeArr[i].pointVal = 4;
}
for(var i = 4; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'five';
  shoeArr[i].pointVal = 5;
}
for(var i = 5; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'six';
  shoeArr[i].pointVal = 6;
}
for(var i = 6; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'seven';
  shoeArr[i].pointVal = 7;
}
for(var i = 7; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'eight';
  shoeArr[i].pointVal = 8;
}
for(var i = 8; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'nine';
  shoeArr[i].pointVal = 9;
}
for(var i = 9; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'ten';
  shoeArr[i].pointVal = 10;
}
for(var i = 10; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'jack';
  shoeArr[i].pointVal = 10;
}
for(var i = 11; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'queen';
  shoeArr[i].pointVal = 10;
}
for(var i = 12; i < shoeArr.length; i+=13){
  shoeArr[i].faceVal = 'king';
  shoeArr[i].pointVal = 10;
}
/////////////////////////////////////////////
//Populate Shoe//////////////////////////////
var populateShoe = function(){
  $(shoeArr).each(function(){
    var $card = $('<div>');
    $card.addClass('shoeCard');
    $shoe.append($card);
  })
}
populateShoe();

/////////////////////////////////////////////
//Deal///////////////////////////////////////

var $dealerDown = $('#dealer_down');
var $dealerUp = $('#dealer_up');
$dealerDown.append($card.eq(Math.floor(Math.random()*shoeArr.length)));
$dealerUp.append($card.eq(Math.floor(Math.random()*shoeArr.length)));















////////////////////////////////////////////////
