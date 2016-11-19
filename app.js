
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

var dealerHandArr = [];
var playerHandArr = [];

var createDealtObjects = function(){
  dealerHandArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
  dealerHandArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
  playerHandArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
  playerHandArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
  dealerHandArr[0].dealerDown = true;
  dealerHandArr[1].dealerUp = true;
  playerHandArr[0].playerHand = true;
  playerHandArr[1].playerHand = true;
  for(var i = 0; i < dealerHandArr.length; i++){
    dealerHandArr[i].inPlay = true;
    dealerHandArr[i].shoe = false;
  }
  for(var i = 0; i < playerHandArr.length; i++){
    playerHandArr[i].inPlay = true;
    playerHandArr[i].shoe = false;
  }
}

////////////////////////////////////////////////////////
//Create Dealt Hands////////////////////////////////////

var createDealtElements = function(){
  $('.shoeCard').eq(0).remove()
  $('.shoeCard').eq(0).remove()
  $('.shoeCard').eq(0).remove()
  $('.shoeCard').eq(0).remove()

var addDealerSuitFace = function(){
  $dealerCard.addClass(dealerHandArr[i].faceVal);
  $dealerCard.addClass(dealerHandArr[i].suit);
};

var addPlayerSuitFace = function(){
  $playerCard.addClass(playerHandArr[i].faceVal);
  $playerCard.addClass(playerHandArr[i].suit);
};


  for(var i = 0; i < dealerHandArr.length; i++){
    if(dealerHandArr[i].dealerDown === true){
      var $dealerCard  = $('<div>');
      $dealerCard.addClass('dealerDown');
      addDealerSuitFace();
      $dealerDown.append($dealerCard);
    }else if(dealerHandArr[i].dealerUp === true){
      var $dealerCard = $('<div>');
      $dealerCard.addClass('dealerUp');
      addDealerSuitFace();
      $dealerUp.append($dealerCard);
    }
  }
  for(var i = 0; i < playerHandArr.length; i++){
    if(playerHandArr[i].playerHand === true){
      var $playerCard = $('<div>');
      $playerCard.addClass('playerHand');
      addPlayerSuitFace();
      $playerHand.append($playerCard);
    }
  }
}


/////////////////////////////////////////////////////
//Deal function//////////////////////////////////////

var dealEm = function(){
  createDealtObjects();
  createDealtElements();
}

dealEm();

////////////////////////////////////////////////////
//Hit///////////////////////////////////////////////

var createHitObjects = function(){
  playerHandArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
};


var createHitElements = function(){
  $('.shoeCard').eq(0).remove()
  var $playerCard = $('<div>');
  $playerCard.addClass('playerHand');
  $playerCard.addClass(playerHandArr[playerHandArr.length-1].suit);
  $playerCard.addClass(playerHandArr[playerHandArr.length-1].faceVal);
  $playerHand.append($playerCard);
}

var hitMe = function(){
  createHitObjects();
  createHitElements();
}

hitMe();

console.log(dealerHandArr);
console.log(playerHandArr);

//////////////////////////////////////////////////////////////
//Conditions & Behaviors//////////////////////////////////////

var getScore = function(arr){
  var score = 0
  for(var i = 0; i < arr.length; i++){
    score += arr[i].pointVal;
  }
  return score;
}
console.log(getScore(playerHandArr));
console.log(getScore(dealerHandArr))






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
