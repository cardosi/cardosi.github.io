//Event Handlers///////////////////////////////////////////////
var bet = function(){
  $bet.append($(this));
  if($(this).hasClass('chip5')){
    var toggle = true;
    for(var i = 0; i < bankArr.length; i++){
      if(bankArr[i].denom === 5 && toggle){
        betArr.push(bankArr.splice(i, 1)[0]);
        toggle = false;
      }
    }
  }else if($(this).hasClass('chip10')){
    var toggle = true;
    for(var i = 0; i < bankArr.length; i++){
      if(bankArr[i].denom === 10 && toggle){
        betArr.push(bankArr.splice(i, 1)[0]);
        toggle = false;
      }
    }
  }else if($(this).hasClass('chip25')){
    var toggle = true;
    for(var i = 0; i < bankArr.length; i++){
      if(bankArr[i].denom === 25 && toggle){
        betArr.push(bankArr.splice(i, 1)[0]);
        toggle = false;
      }
    }
  }else if($(this).hasClass('chip100')){
    var toggle = true;
    for(var i = 0; i < bankArr.length; i++){
      if(bankArr[i].denom === 100 && toggle){
        betArr.push(bankArr.splice(i, 1)[0]);
        toggle = false;
      }
    }
  }
  console.log(bankArr);
  console.log(betArr);
};

var hideMessage = function(){
  $message.css('visibility', 'hidden');
}

var showMessage = function(text){
  $message.text(text);
  $message.css('visibility', 'visible');
}

///////////////////////////////////////////////////////////////
//Card Constructor////////////////////////////////////////////
var Card = function(uid){
  this.uid = uid;
  this.shoe = true;
  this.dealerDown = false;
  this.inPlay = false;
};

//////////////////////////////////////////////////////////////
//variables///////////////////////////////////////////////////

var shoeArr = [];
var $body = $('body');
var $shoe = $('#shoe');
var $dealer_down = $('#dealer_down');
var $dealerUp = $('#dealer_up');
var $playerHand = $('#player_hand');
var $bank = $('#bank');
var $bank100 = $('#bank100');
var $bank25 = $('#bank25');
var $bank10 = $('#bank10');
var $bank5 = $('#bank5');
var $bet = $('#bet');
var $bigShoeImg = $('#bigShoeImg');
var $shoeImg = $('#shoeImg');
var $deckImg = $('#deckImg');
var $dealImg = $('#dealImg');
var $hitImg = $('#hitImg');
var $standImg = $('#standImg');
var $dealerDown = $('#dealerDown');
var $message = $('#message');

//Create 52 objects/////////////////////////////////

var fillShoeArr = function(cards){
  for(var i = 0; i < cards; i++){
    var cardObj = new Card(i)
    shoeArr.push(cardObj);
  };
}

////////////////////////////////////////////////
//Assign Suits//////////////////////////////////

var populateShoeArr = function(){
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
}

/////////////////////////////////////////////
//Populate Shoe//////////////////////////////
var populateBigShoe = function(){
  fillShoeArr(416);
  populateShoeArr();
  $(shoeArr).each(function(){
    var $card = $('<div>');
    $card.addClass('shoeCard');
    $shoe.append($card);
  })
}
var populateSmallShoe = function(){
  fillShoeArr(312);
  populateShoeArr();
  $(shoeArr).each(function(){
    var $card = $('<div>');
    $card.addClass('shoeCard');
    $shoe.append($card);
  })
}
var populateDeckShoe = function(){
  fillShoeArr(52);
  populateShoeArr();
  $(shoeArr).each(function(){
    var $card = $('<div>');
    $card.addClass('shoeCard');
    $shoe.append($card);
  })
}

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
      $dealerCard.attr('id', 'dealerDown');
      addDealerSuitFace();
      $dealer_down.append($dealerCard);
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
  if(shoeArr[0] === undefined){
    //do nothing
  } else {
  createDealtObjects();
  createDealtElements();
  checkBJ();
}
}

////////////////////////////////////////////////////
//Hit///////////////////////////////////////////////

var playerHitObjects = function(){
  playerHandArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
};


var playerHitElements = function(){
  $('.shoeCard').eq(0).remove()
  var $playerCard = $('<div>');
  $playerCard.addClass('playerHand');
  $playerCard.addClass(playerHandArr[playerHandArr.length-1].suit);
  $playerCard.addClass(playerHandArr[playerHandArr.length-1].faceVal);
  $playerHand.append($playerCard);
}

var dealerHitObjects = function(){
  dealerHandArr.push(shoeArr.splice(Math.floor(Math.random()*shoeArr.length), 1)[0]);
};


var dealerHitElements = function(){
  $('.shoeCard').eq(0).remove()
  var $dealerCard = $('<div>');
  $dealerCard.addClass('dealerHand');
  $dealerCard.addClass(dealerHandArr[dealerHandArr.length-1].suit);
  $dealerCard.addClass(dealerHandArr[dealerHandArr.length-1].faceVal);
  $dealerUp.append($dealerCard);
}

var hitPlayer = function(){
  playerHitObjects();
  playerHitElements();
  checkBJ();
  playerBust();
}

var hitDealer = function(){
  dealerHitObjects();
  dealerHitElements();
  checkBJ();
  dealerBust();
  checkPush();
  dealerWin();
}
//////////////////////////////////////////////////////////
// Stand//////////////////////////////////////////////////

var stand = function(){
  $dealer_down.children().attr('id', '');
  if(getScore(dealerHandArr) > getScore(playerHandArr)){
    showMessage("Dealer Wins");
  } else if(getScore(dealerHandArr) < 17){
    hitDealer();
    if(getScore(dealerHandArr) < 17){
      hitDealer();
      if(getScore(dealerHandArr) < 17){
        hitDealer();
        if(getScore(dealerHandArr) < 17){
          hitDealer();
          if(getScore(dealerHandArr) < 17){
            hitDealer();
            if(getScore(dealerHandArr) < 17){
              hitDealer();
            }
          }
        }
      }
    }
  }
}




/////////////////////////////////////////////////////////////
//Conditions & Behaviors/////////////////////////////////////

var getScore = function(arr){
  var score = 0
  for(var i = 0; i < arr.length; i++){
    score += arr[i].pointVal;
  }
  return score;
}
var checkBJ = function(){
  if(getScore(playerHandArr) === 21){
    $dealer_down.children().attr('id', '');
    showMessage("BlackJack!!!");
  }else if(getScore(dealerHandArr) === 21){
    $dealer_down.children().attr('id', '');
    showMessage("Dealer BlackJack");
  }
}

var dealerBust = function(){
  if(getScore(dealerHandArr) > 21){
    showMessage("Dealer Busts");
  }
}

var playerBust = function(){
  if(getScore(playerHandArr) > 21){
    showMessage("Bust");
  }
}

var dealerWin = function(){
  if(getScore(dealerHandArr) < 21 && getScore(dealerHandArr) > getScore(playerHandArr)){
    showMessage("Dealer Wins");
  }
}

var checkPush = function(){
  if(getScore(dealerHandArr) > 17 && getScore(dealerHandArr) === getScore(playerHandArr)){
    showMessage("Push");
  }
}


/////////////////////////////////////////////////////
//Bank & Bet/////////////////////////////////////////

var bankArr = [];
var betArr = [];

var Chip = function(denom){
  this.denom = denom;
  this.bet = false;
  this.won = false;
};

var createBank = function(){
  for(var i = 0; i < 2; i++){
    var chip100 = new Chip(100);
    bankArr.push(chip100);
    var $chip = $('<div>');
    $chip.on('click', bet);
    $chip.addClass('chip');
    $chip.addClass('bankChip');
    $chip.addClass('chip100');
    $chip.text('100');
    $bank100.append($chip);
  }
  for(var i = 0; i < 6; i++){
    var chip25 = new Chip(25);
    bankArr.push(chip25);
    var $chip = $('<div>');
    $chip.on('click', bet);
    $chip.addClass('chip');
    $chip.addClass('bankChip');
    $chip.addClass('chip25');
    $chip.text('25');
    $bank25.append($chip);
  }
  for(var i = 0; i < 10; i++){
    var chip10 = new Chip(10);
    bankArr.push(chip10);
    var $chip = $('<div>');
    $chip.on('click', bet);
    $chip.addClass('chip');
    $chip.addClass('bankChip');
    $chip.addClass('chip10');
    $chip.text('10');
    $bank10.append($chip);
  }
  for(var i = 0; i < 10; i++){
    var chip5 = new Chip(5);
    bankArr.push(chip5);
    var $chip = $('<div>');
    $chip.on('click', bet);
    $chip.addClass('chip');
    $chip.addClass('bankChip');
    $chip.addClass('chip5');
    $chip.text('5');
    $bank5.append($chip);
  }
}

createBank();

///////////////////////////////////////////////////////
//Event Listeners//////////////////////////////////////

$bigShoeImg.on('click', populateBigShoe);
$shoeImg.on('click', populateSmallShoe);
$deckImg.on('click', populateDeckShoe);
$dealImg.on('click', dealEm);
$hitImg.on('click', hitPlayer);
$standImg.on('click', stand);
$message.on('click', hideMessage);
















////////////////////////////////////////////////
