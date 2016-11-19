
var Card = function(uid){
  this.uid = uid;
  this.shoe = true;
  this.dealerDown = false;
  this.inPlay = false;
};

var shoeArr = [];

var $body = $('body');
var $shoe = $('#shoe');
var $dealerDown = $('#dealer_down');
var $dealerUp = $('#dealer_up');
var $playerHand = $('#player_hand');

//Create 52 objects/////////////////////////////////

for(var i = 0; i < 312; i++){
  var cardObj = new Card(i)
  shoeArr.push(cardObj);
};

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
//Create Dealt Objects///////////////////////

var inPlayArr = [];

var createDealtObjects = function(){
  inPlayArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
  inPlayArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
  inPlayArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
  inPlayArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
  inPlayArr[0].dealerDown = true;
  inPlayArr[1].dealerUp = true;
  inPlayArr[2].playerHand = true;
  inPlayArr[3].playerHand = true;
  for(var i = 0; i < inPlayArr.length; i++){
    inPlayArr[i].inPlay = true;
    inPlayArr[i].shoe = false;
  }
}

////////////////////////////////////////////////////////
//Create Dealt Hands////////////////////////////////////

var createDealtElements = function(){
  $('.shoeCard').eq(0).remove()
  $('.shoeCard').eq(0).remove()
  $('.shoeCard').eq(0).remove()
  $('.shoeCard').eq(0).remove()

var addSuitFace = function(){
  $card.addClass(inPlayArr[i].faceVal);
  $card.addClass(inPlayArr[i].suit);
  $card.addClass("inPlay");
};

  for(var i = 0; i < inPlayArr.length; i++){
    if(inPlayArr[i].dealerDown === true){
      var $card  = $('<div>');
      $card.addClass('dealerDown');
      addSuitFace();
      $dealerDown.append($card);
    }else if(inPlayArr[i].dealerUp === true){
      var $card = $('<div>');
      $card.addClass('dealerUp');
      addSuitFace();
      $dealerUp.append($card);
    }else if(inPlayArr[i].playerHand === true){
      var $card = $('<div>');
      $card.addClass('playerHand');
      addSuitFace();
      $playerHand.append($card);
    }
  }
}

console.log(inPlayArr);

/////////////////////////////////////////////////////
//Deal function//////////////////////////////////////

var dealEm = function(){
  createDealtObjects();
  createDealtElements();
}

dealEm();





// var $shoeCard = $('.shoeCard');
// var $dealerDown = $('#dealer_down');
// var $dealerUp = $('#dealer_up');
// var $player = $('#player_hand');
// var deal = function(){
//   $dealerDown.append($shoeCard.eq(Math.floor(Math.random()*($shoeCard).length)));
//   $dealerUp.append($shoeCard.eq(Math.floor(Math.random()*($shoeCard).length)));
//   $player.append($shoeCard.eq(Math.floor(Math.random()*($shoeCard).length)));
//   $player.append($shoeCard.eq(Math.floor(Math.random()*($shoeCard).length)));
// }
//
// deal();
















////////////////////////////////////////////////
