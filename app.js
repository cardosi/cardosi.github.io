$(function(){

//Event Handlers/////////////////////////////////////////////
var betLock = false;

var newGame = function(){
  betLock = false;
  playerHandArr = [];
  dealerHandArr = [];
  bankArr = [];
  betArr = [];
  shoeArr = [];
  $bank5.empty();
  $bank10.empty();
  $bank25.empty();
  $bank100.empty();
  $bet.empty();
  $shoe.empty();
  $atmDiv.show();
  $playerHand.empty();
  $dealer_down.empty();
  $dealerUp.empty();
  $bankBox.css('visibility', 'hidden');
}



var unbet = function(){
  if(betLock){
    showMessage("Don't touch the chips, we're in the middle of a hand!");
  } else if(betLock === false){
    $(this).unbind('click', unbet);
    $(this).bind('click', bet);
    if($(this).hasClass('chip5')){
      $bank5.append($(this));
      var toggle = true;
      for(var i = 0; i < betArr.length; i++){
        if(betArr[i].denom === 5 && toggle){
          bankArr.push(betArr.splice(i, 1)[0]);
          toggle = false;
        }
      }
    }else if($(this).hasClass('chip10')){
      $bank10.append($(this));
      var toggle = true;
      for(var i = 0; i < betArr.length; i++){
        if(betArr[i].denom === 10 && toggle){
          bankArr.push(betArr.splice(i, 1)[0]);
          toggle = false;
        }
      }
    }else if($(this).hasClass('chip25')){
      $bank25.append($(this));
      var toggle = true;
      for(var i = 0; i < betArr.length; i++){
        if(betArr[i].denom === 25 && toggle){
          bankArr.push(betArr.splice(i, 1)[0]);
          toggle = false;
        }
      }
    }else if($(this).hasClass('chip100')){
      $bank100.append($(this));
      var toggle = true;
      for(var i = 0; i < betArr.length; i++){
        if(betArr[i].denom === 100 && toggle){
          bankArr.push(betArr.splice(i, 1)[0]);
          toggle = false;
        }
      }
    }
  }
  console.log(bankArr);
  console.log(betArr);
  updateNum();
};

var bet = function(){
  if(betLock){
    showMessage("Don't touch the chips, we're in the middle of a hand!");
  } else if(betLock === false){
    $bet.append($(this));
    $(this).unbind('click', addChips100);
    $(this).unbind('click', addChips25);
    $(this).unbind('click', addChips10);
    $(this).unbind('click', bet);
    $(this).bind('click', unbet);
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
    updateNum();
  }
};

var hideMessage = function(){
  $message.css('visibility', 'hidden');
}

var showMessage = function(text){
  $message.text(text);
  $message.css('visibility', 'visible');
}

var getCash = function(){
  $atmDiv.hide();
  $bankBox.css('visibility', 'visible');
  createBank();
  $chipChange.css('visibility', 'visible');
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
var $atmImg = $('#atmImg');
var $atmDiv = $('#atmDiv');
var $bankBox = $('#bankBox');
var $betNum = $('#betNum');
var $bankNum = $('#bankNum');
var $playerPts = $('#playerPts');
var $dealerPts = $('#dealerPts');
var $newGame = $('#newGameImg');
var $ddImg = $('#doubleDownImg');
var $ddMessage = $('#ddMessage');
var ddBet = 0;
window.ddBet = ddBet;
var $chipChange = $('#chipChange');
var $changeBox = $('#changeBox');
var $plusImg = $('#plusImg');
var $minusImg = $('#minusImg');
var clickToggle = true;
window.clickToggle = clickToggle;


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
  if(shoeArr.length > 10){
    showMessage('You have plenty of cards');
  }else{
    fillShoeArr(416);
    populateShoeArr();
    $(shoeArr).each(function(){
      var $card = $('<div>');
      $card.addClass('shoeCard');
      $shoe.append($card);
    })
  }
}
var populateSmallShoe = function(){
  if(shoeArr.length > 10){
    showMessage('You have plenty of cards');
  }else{
    fillShoeArr(312);
    populateShoeArr();
    $(shoeArr).each(function(){
      var $card = $('<div>');
      $card.addClass('shoeCard');
      $shoe.append($card);
    })
  }
}
var populateDeckShoe = function(){
  if(shoeArr.length > 10){
    showMessage('You have plenty of cards');
  }else{
    fillShoeArr(52);
    populateShoeArr();
    $(shoeArr).each(function(){
      var $card = $('<div>');
      $card.addClass('shoeCard');
      $shoe.append($card);
    })
  }
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
  $dealerCard.addClass('card');
};

var addPlayerSuitFace = function(){
  $playerCard.addClass(playerHandArr[i].faceVal);
  $playerCard.addClass(playerHandArr[i].suit);
  $playerCard.addClass('card');
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
  if(shoeArr[0] === undefined && betArr[0] === undefined){
    showMessage("Pick a Shoe & Place a Bet")
  } else if(shoeArr[0] === undefined){
    showMessage("Pick a shoe")
  } else if(betArr[0] === undefined){
    showMessage("Place a bet first")
  } else {
    betLock = true;
    clearHands();
    createDealtObjects();
    createDealtElements();
    updatePtsDeal();
    // checkBJ();
    updateNum();
    showDD();
    ddBet = getTotal(betArr);
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
  $playerCard.addClass('card');
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
  $dealerCard.addClass('card');
  $dealerCard.addClass('dealerHand');
  $dealerCard.addClass(dealerHandArr[dealerHandArr.length-1].suit);
  $dealerCard.addClass(dealerHandArr[dealerHandArr.length-1].faceVal);
  $dealerUp.append($dealerCard);
}

var hitPlayer = function(){
  playerHitObjects();
  playerHitElements();
  updatePtsPlayerHit();
  // checkBJ();
  playerBust();
  $ddImg.css('visibility', 'hidden');
}

var hitPlayerDD = function(){
  if(getTotal(betArr) === (ddBet * 2)){
    playerHitObjects();
    playerHitElements();
    updatePtsPlayerHit();
    stand();
    $hitImg.unbind('click', hitPlayerDD);
    $hitImg.bind('click', hitPlayer);
    $ddMessage.css('visibility', 'hidden');
  } else {
    showMessage('Your total bet has to be ' + ddBet*2);
  }

}

var hitDealer = function(){
  dealerHitObjects();
  dealerHitElements();
  updatePts();
  // checkBJ();
  dealerBust();
  checkPush();
  dealerWin();
  checkPlayerWin();
}
//////////////////////////////////////////////////////////
// Stand//////////////////////////////////////////////////

var stand = function(){
  $dealer_down.children().attr('id', '');
  updatePts();
  if(getScore(dealerHandArr) > getScore(playerHandArr)){
    showMessage("Dealer Wins");
    betLost();
    updateNum();
    betLock = false;
  } else if(getScore(dealerHandArr) >= 17 && getScore(dealerHandArr) === getScore(playerHandArr)){
    showMessage("Push It Real Good");
    updateNum();
    betLock = false;
  } else if(getScore(dealerHandArr) >= 17 && getScore(dealerHandArr) < getScore(playerHandArr)){
    showMessage("You Won");
    betWon();
    updateNum();
    betLock = false;
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
  var aceCount = 0
  var finalScore = 0
  for(var i = 0; i < arr.length; i++){
    if(arr[i].pointVal === 11){
      aceCount = aceCount + 1;
    }
    score += arr[i].pointVal;
    }
    if(score > 21 && aceCount === 1){
      finalScore = score - 10;
    } else if(score > 21 && aceCount === 2){
      finalScore = score - 20;
    } else if(score > 21 && aceCount === 3){
      finalScore = score - 30;
    } else if(score > 21 && aceCount === 4){
      finalScore = score - 40;
    } else {
      finalScore = score;
    }
    return finalScore;
  }


var getTotal = function(arr){
  var total = 0
  for(var i = 0; i < arr.length; i++){
    total += arr[i].denom;
  }
  return total;
}
var updateNum = function(){
  $bankNum.text("$" + getTotal(bankArr));
  $betNum.text("$" + getTotal(betArr));
}

var updatePtsDeal = function(){
  $playerPts.text(getScore(playerHandArr));
  $dealerPts.text(dealerHandArr[1].pointVal);
}

var updatePts = function(){
  $playerPts.text(getScore(playerHandArr));
  $dealerPts.text(getScore(dealerHandArr));
}

var updatePtsPlayerHit = function(){
  $playerPts.text(getScore(playerHandArr));
}


var dealerBust = function(){
  if(getScore(dealerHandArr) > 21){
    showMessage("Dealer Busts");
    betWon();
    betLock = false;
    updateNum();
  }
}

var playerBust = function(){
  if(getScore(playerHandArr) > 21){
    $dealer_down.children().attr('id', '');
    showMessage("Bust");
    betLost();
    betLock = false;
    updateNum();
    updatePts();
  }
}

var dealerWin = function(){
  if(getScore(dealerHandArr) < 21 && getScore(dealerHandArr) > getScore(playerHandArr)){
    showMessage("Dealer Wins");
    betLost();
    betLock = false;
    updateNum();
    updatePts();
  } else if(getScore(dealerHandArr) === 21 && getScore(dealerHandArr) > getScore(playerHandArr) && getScore(playerHandArr)< 21){
    showMessage("Dealer BlackJack");
    betLost();
    betLock = false;
    updateNum();
    updatePts();
  }
}

var checkPush = function(){
  if(getScore(dealerHandArr) >= 17 && getScore(dealerHandArr) === getScore(playerHandArr)){
    showMessage("Push");
    betLock = false;
    updateNum();
    updatePts();
  }
}

var checkPlayerWin = function(){
  if(getScore(dealerHandArr) >= 17 && getScore(dealerHandArr) < getScore(playerHandArr)){
    showMessage("You Won!!!");
    betWon();
    betLock = false;
    updateNum();
    updatePts();

  } else if(getScore(playerHandArr) === 21 && getScore(playerHandArr) > getScore(dealerHandArr) && getScore(dealerHandArr)< 21){
    showMessage("Blackjack");
    betWon();
    betLock = false;
    updateNum();
    updatePts();
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
    $chip.bind('click', bet);
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
    $chip.bind('click', bet);
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
    $chip.bind('click', bet);
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
    $chip.bind('click', bet);
    $chip.addClass('chip');
    $chip.addClass('bankChip');
    $chip.addClass('chip5');
    $chip.text('5');
    $bank5.append($chip);
  }
}
///////////////////////////////////////////////////////
//Bet Win & Loss///////////////////////////////////////

var betWon = function(){
  bankArr = bankArr.concat(betArr)
  for(var i = bankArr.length-betArr.length; i < bankArr.length; i++){
    if(bankArr[i].denom === 5){
      var $chip = $('<div>');
      $chip.on('click', bet);
      $chip.addClass('chip');
      $chip.addClass('bankChip');
      $chip.addClass('chip5');
      $chip.text('5');
      $bank5.append($chip);
    }else if(bankArr[i].denom === 10){
      var $chip = $('<div>');
      $chip.on('click', bet);
      $chip.addClass('chip');
      $chip.addClass('bankChip');
      $chip.addClass('chip10');
      $chip.text('10');
      $bank10.append($chip);
    } else if(bankArr[i].denom === 25){
      var $chip = $('<div>');
      $chip.on('click', bet);
      $chip.addClass('chip');
      $chip.addClass('bankChip');
      $chip.addClass('chip25');
      $chip.text('25');
      $bank25.append($chip);
    } else if(bankArr[i].denom === 100){
      var $chip = $('<div>');
      $chip.on('click', bet);
      $chip.addClass('chip');
      $chip.addClass('bankChip');
      $chip.addClass('chip100');
      $chip.text('100');
      $bank100.append($chip);
    }
  }
}

var betLost = function(){
  betArr = [];
  $bet.empty();
}


///////////////////////////////////////////////////////
//Clears & Resets//////////////////////////////////////
var clearHands = function(){
  dealerHandArr = [];
  playerHandArr = [];
  $dealer_down.children().attr('id', 'dealerDown');
  $dealer_down.empty();
  $dealerUp.empty();
  $playerHand.empty();
  updatePts();
}

///////////////////////////////////////////////////////
//Event Listeners//////////////////////////////////////



var showDD = function(){
  if(getScore(playerHandArr) >= 9 && getScore(playerHandArr) <= 11){
    console.log('DOUBLE DOWN');
    $ddImg.css('visibility', 'visible');
  }
}

var doubleDown = function(){
  betLock = false;
  $ddMessage.html('Bet Another $' + getTotal(betArr) + '<br>Then Hit It');
  $ddMessage.css('visibility', 'visible');
  $hitImg.unbind('click', hitPlayer);
  $hitImg.bind('click', hitPlayerDD);
  $ddImg.css('visibility', 'hidden');
}


var showHidePlusMinus = function(){
  if(clickToggle){
    $plusImg.css('visibility', 'visible');
    $minusImg.css('visibility', 'visible');
    clickToggle = false;
  } else {
    $plusImg.css('visibility', 'hidden');
    $minusImg.css('visibility', 'hidden');
    clickToggle = true;
  }
}

var addChips100 = function(){
  for(var i = 0; i < bankArr.length; i++){
    if(bankArr[i].denom === 100){
      bankArr.splice(i,1);
      $(this).remove();
      for(var j = 0; j < 4; j++){
        var chip25 = new Chip(25);
        bankArr.push(chip25);
        var $chip = $('<div>');
        $chip.addClass('chip');
        $chip.bind('click', addChips25);
        $chip.addClass('chip25');
        $chip.text('25');
        $bank25.append($chip);
      }
      break;
      console.log(bankArr);
    }
  }
}

var addChips25 = function(){
  for(var i = 0; i < bankArr.length; i++){
    if(bankArr[i].denom === 25){
      bankArr.splice(i,1);
      $(this).remove();
      for(var j = 0; j < 2; j++){
        var chip10 = new Chip(10);
        bankArr.push(chip10);
        var $chip = $('<div>');
        $chip.addClass('chip');
        $chip.bind('click', addChips10);
        $chip.addClass('chip10');
        $chip.text('10');
        $bank10.append($chip);
      }
      var chip5 = new Chip(5);
      bankArr.push(chip5);
      var $chip = $('<div>');
      $chip.addClass('chip');
      $chip.addClass('chip5');
      $chip.text('5');
      $bank5.append($chip);
      break;
    }
  }
}

var addChips10 = function(){
  for(var i = 0; i < bankArr.length; i++){
    if(bankArr[i].denom === 10){
      bankArr.splice(i,1);
      $(this).remove();
      for(var j = 0; j < 2; j++){
        var chip5 = new Chip(5);
        bankArr.push(chip5);
        var $chip = $('<div>');
        $chip.addClass('chip');
        $chip.addClass('chip5');
        $chip.text('5');
        $bank5.append($chip);
      }
      break;
      console.log(bankArr);
    }
  }
}
var addToggle = true;
var addAllChips = function(){
  if(addToggle){
    $minusImg.css('opacity', '0.3');
    $bank100.children().unbind('click', bet);
    $bank100.children().bind('click', addChips100);
    $bank25.children().unbind('click', bet);
    $bank25.children().bind('click', addChips25);
    $bank10.children().unbind('click', bet);
    $bank10.children().bind('click', addChips10);
    addToggle = false;
  } else {
    $minusImg.css('opacity', '1');
    $bank100.children().bind('click', bet);
    $bank100.children().unbind('click', addChips100);
    $bank25.children().bind('click', bet);
    $bank25.children().unbind('click', addChips25);
    $bank10.children().bind('click', bet);
    $bank10.children().unbind('click', addChips10);
    $bank5.children().bind('click', bet);
    addToggle = true;
  }
}

var lessChips5 = function(){
  var chipCount5 = 0
  for(var i = 0; i < bankArr.length; i++){
    if(bankArr[i].denom === 5){
      chipCount5 = chipCount5 + 1;
    }
  }
  if(chipCount5 >= 5){
    for(var i = 0; i < 5; i++){
      for(var j = 0; j < bankArr.length; j++){
        if(bankArr[j].denom === 5){
          bankArr.splice(j,1);
        }
        break;
      }
      $bank5.children()[0].remove();
    }
    var chip25 = new Chip(25);
    bankArr.push(chip25);
    var $chip = $('<div>');
    $chip.addClass('chip');
    $chip.addClass('chip25');
    $chip.bind('click', lessChips25);
    $chip.text('25');
    $bank25.append($chip);
  }
}

var lessChips10 = function(){
  var chipCount10 = 0
  for(var i = 0; i < bankArr.length; i++){
    if(bankArr[i].denom === 10){
      chipCount10 = chipCount10 + 1;
    }
  }
  if(chipCount10 >= 5){
    for(var i = 0; i < 5; i++){
      for(var j = 0; j < bankArr.length; j++){
        if(bankArr[j].denom === 10){
          bankArr.splice(j,1);
        }
        break;
      }
      $bank10.children()[0].remove();
    }
    for(var i = 0; i < 2; i++){
      var chip25 = new Chip(25);
      bankArr.push(chip25);
      var $chip = $('<div>');
      $chip.addClass('chip');
      $chip.bind('click', lessChips25);
      $chip.addClass('chip25');
      $chip.text('25');
      $bank25.append($chip);
    }
  }
}

var lessChips25 = function(){
  var chipCount25 = 0
  for(var i = 0; i < bankArr.length; i++){
    if(bankArr[i].denom === 25){
      chipCount25 = chipCount25 + 1;
    }
  }
  if(chipCount25 >= 4){
    for(var i = 0; i < 4; i++){
      for(var j = 0; j < bankArr.length; j++){
        if(bankArr[j].denom === 25){
          bankArr.splice(j,1);
        }
        break;
      }
      $bank25.children()[0].remove();
    }
    var chip100 = new Chip(100);
    bankArr.push(chip100);
    var $chip = $('<div>');
    $chip.addClass('chip');
    $chip.addClass('chip100');
    $chip.text('100');
    $bank100.append($chip);
  }
}

var minusToggle = true;
var minusAllChips = function(){
  if(minusToggle){
    $plusImg.css('opacity', '0.3');
    $bank25.children().unbind('click', bet);
    $bank25.children().bind('click', lessChips25);
    $bank10.children().unbind('click', bet);
    $bank10.children().bind('click', lessChips10);
    $bank5.children().unbind('click', bet);
    $bank5.children().bind('click', lessChips5);
    minusToggle = false;
  } else {
    $plusImg.css('opacity', '1');
    $bank25.children().bind('click', bet);
    $bank25.children().unbind('click', lessChips25);
    $bank10.children().bind('click', bet);
    $bank10.children().unbind('click', lessChips10);
    $bank5.children().bind('click', bet);
    $bank5.children().unbind('click', lessChips5);
    $bank100.children().bind('click', bet);
    minusToggle = true;
  }
}



$bigShoeImg.on('click', populateBigShoe);
$shoeImg.on('click', populateSmallShoe);
$deckImg.on('click', populateDeckShoe);
$dealImg.on('click', dealEm);
$hitImg.bind('click', hitPlayer);
$standImg.on('click', stand);
$message.on('click', hideMessage);
$atmImg.on('click', getCash);
$newGame.on('click', newGame);
$ddImg.on('click', doubleDown);
$plusImg.on('click', addAllChips);
$minusImg.on('click', minusAllChips);
$chipChange.on('click', showHidePlusMinus);
















////////////////////////////////////////////////
});
