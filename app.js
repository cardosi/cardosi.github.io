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
  winCount = 0;
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
var $directions = $('#outerDirections');
var $keyImg = $('#keyImg');
var $keyHoverBox = $('#keyHoverBox');
var $keyClose = $('#keyClose');
var $fullKey = $('#outerFullKey');
var $keyBigShoe = $('#keyBigShoe');
var $keyShoe = $('#keyShoe');
var $keyDeck = $('#keyDeck');
var $keyChip5 = $('#keyChip5');
var $keyChip10 = $('#keyChip10');
var $keyChip25 = $('#keyChip25');
var $keyChip100 = $('#keyChip100');
var $keyDeal = $('#keyDeal');
var $keyHit = $('#keyHit');
var $keyStand = $('#keyStand');
var $keyATM = $('#keyATM');
var $keyChipStack = $('#keyChipStack');
var $keyPlus = $('#keyPlus');
var $keyMinus = $('#keyMinus');
var $keyDD = $('#keyDD');
var $keyHead = $('#keyHead');
var $keyMessage = $('#keyMessage');
var $keyNewGame = $('#keyNewGame');
var winCount = 0;
window.winCount = winCount;
var $bookImg = $('#bookImg');
var $openBookImg = $('#openBookImg');
var $rainImg = $('#rainImg');
var $bookDiv = $('#outerBookHoverDiv');
var bookSelector = 0;
window.bookSelector = bookSelector;
var $standBookImg = $('#standBookImg');
var $hitBookImg = $('#hitBookImg');
var $ddBookImg = $('#ddBookImg');
var $dealerToothpicks = $('#dealerToothpicks');
var $playerToothpicks = $('#playerToothpicks');
var $picks = $('.pick');



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
    rainManMode();
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
    rainManMode();
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
    rainManMode();
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
    bookSay();
    rainCount = 0;
    rainManMode();
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
  bookSay();
  $ddImg.css('visibility', 'hidden');
  rainCount = 0;
  rainManMode();
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
  winCount = winCount + 1;
  winTrack();
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
        console.log(bankArr);
        console.log(getTotal(bankArr));
      }
      break;

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
      console.log(bankArr);
      console.log(getTotal(bankArr));
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
        console.log(bankArr);
        console.log(getTotal(bankArr));
      }
      break;
      console.log(bankArr);
    }
  }
}
var addToggle = true;
var addAllChips = function(){
  if(addToggle){
    $plusImg.css('opacity', '1');
    $minusImg.css('opacity', '0.3');
    $bank100.children().unbind('click', bet);
    $bank100.children().bind('click', addChips100);
    $bank25.children().unbind('click', bet);
    $bank25.children().bind('click', addChips25);
    $bank10.children().unbind('click', bet);
    $bank10.children().bind('click', addChips10);
    $bank5.children().unbind('click', bet);
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
      var toggle = true
      for(var j = 0; j < bankArr.length; j++){
        if(bankArr[j].denom === 5 && toggle){
          bankArr.splice(j,1);
          toggle = false;
        }
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
    console.log(bankArr);
    console.log(getTotal(bankArr));
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
      var toggle = true;
      for(var j = 0; j < bankArr.length; j++){
        if(bankArr[j].denom === 10 && toggle){
          bankArr.splice(j,1);
          toggle = false;
        }
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
      console.log(bankArr);
      console.log(getTotal(bankArr));
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
      var toggle = true;
      for(var j = 0; j < bankArr.length; j++){
        if(bankArr[j].denom === 25 && toggle){
          bankArr.splice(j,1);
          toggle = false;
        }
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
    console.log(bankArr);
    console.log(getTotal(bankArr));
  }
}

var minusToggle = true;
var minusAllChips = function(){
  if(minusToggle){
    $minusImg.css('opacity', '1');
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

var darkNewGame = function(){
  $newGame.css('opacity', '1');
}

var lightNewGame = function(){
  $newGame.css('opacity', '0.5');
}

var darkKey = function(){
  $keyImg.css('opacity', '1');
}

var lightKey = function(){
  $keyImg.css('opacity', '0.5');
}

var removeDirections = function(){
  $directions.remove();
  $bigShoeImg.css('visibility', 'visible');
  $shoeImg.css('visibility', 'visible');
  $deckImg.css('visibility', 'visible');
  $atmImg.css('visibility', 'visible');
}

var showKey = function(){
  $keyImg.css('visibility', 'visible');
}

var hideKey = function(){
  $keyImg.css('visibility', 'hidden');
}

var showFullKey = function(){
  $fullKey.css('visibility', 'visible');
}

var hideFullKey = function(){
  $fullKey.css('visibility', 'hidden');
}

var keyMssPop = function(head, message){
  $keyHead.text(head);
  $keyMessage.text(message);
}

var newGameMss = function(){
  keyMssPop("New Game", "Click this to reset everything (even your chips!) and start a new game.");
}

var bigShoeMss = function(){
  keyMssPop("8 Deck Shoe", "Click this to fill up the shoe with 8 decks");
}

var shoeMss = function(){
  keyMssPop("6 Deck Shoe", "Click this to fill up the shoe with 6 decks");
}

var deckMss = function(){
  keyMssPop("Single Deck Shoe", "Click this to fill the shoe up with 1 deck");
}

var dealMss = function(){
  keyMssPop("Deal", "Click this to deal, but make sure there are cards in the shoe and you've placed a bet");
}

var hitMss = function(){
  keyMssPop("Hit", "Click this to Hit (that means you want another card)");
}

var standMss = function(){
  keyMssPop("Stand", "Click this if you like your hand and you want to go with it");
}
var ddMss = function(){
  keyMssPop("Double Down", "This will appear near your cards if the first two cards you are dealt add up to 9, 10, or 11. Clicking it will allow you to double your bet and get one more card. If you don't click it, you can continue the hand as normal.");
}

var atmMss = function(){
  keyMssPop("ATM", "Click this to get some cash for chips. It'll give you $500 worth of chips. You can only click it once (but if you run out of money, just start a new game).")
}

var chipChangeMss = function(){
  keyMssPop("Chip Changer", "Click this to show the Plus and Minus buttons that will allow you to trade your chips for different denominations.");
}

var plusMss = function(){
  keyMssPop("Get More Chips", "Click this then click any of your chips (except $5) to trade them in for smaller chips. Once you're done, click it again to resume play.")
}

var minusMss = function(){
  keyMssPop("Consolidate Chips", "Click this then click your chips to trade them in for higher denominations. You can trade five $5 chips for a $25, five $10 chips for two $25, or four $25 chips for a $100 chip. Click it again to resume play");
}

var chip5Mss = function(){
  keyMssPop("$5 Chip", "This a $5 chip... Click on it to bet one. If you've already bet it, you can click on the $5 chip in the pot and pull it back (only if you're not in the middle of a hand)");
}

var chip10Mss = function(){
  keyMssPop("$10 Chip", "This a $10 chip... Click on it to bet one. If you've already bet it, you can click on the $10 chip in the pot and pull it back (only if you're not in the middle of a hand.)");
}

var chip25Mss = function(){
  keyMssPop("$25 Chip", "This a $25 chip... Click on it to bet one. If you've already bet it, you can click on the $25 chip in the pot and pull it back (only if you're not in the middle of a hand.)");
}

var chip100Mss = function(){
  keyMssPop("$100 Chip", "This a $100 chip... Click on it to bet one. If you've already bet it, you can click on the $100 chip in the pot and pull it back (only if you're not in the middle of a hand.)");
}

var keyMssClear = function(){
  $keyHead.text('');
  $keyMessage.text('');
}

var winTrack = function(){
  if(winCount === 1){
    $('#k2').css("font-family", "'Londrina Solid', cursive");
    $('#k2').css('color', 'black');
  } else if(winCount === 2){
    $('#c2').css("font-family", "'Londrina Solid', cursive");
    $('#c2').css('color', 'black');
  } else if(winCount === 3){
    $('#a2').css("font-family", "'Londrina Solid', cursive");
    $('#a2').css('color', 'black');
  } else if(winCount === 4){
    $('#j').css("font-family", "'Londrina Solid', cursive");
    $('#j').css('color', 'black');
  } else if(winCount === 5){
    $('#k').css("font-family", "'Londrina Solid', cursive");
    $('#k').css('color', 'black');
  } else if(winCount === 6){
    $('#c').css("font-family", "'Londrina Solid', cursive");
    $('#c').css('color', 'black');
  } else if(winCount === 7){
    $('#a').css("font-family", "'Londrina Solid', cursive");
    $('#a').css('color', 'black');
  } else if(winCount === 8){
    $('#l').css("font-family", "'Londrina Solid', cursive");
    $('#l').css('color', 'black');
  } else if(winCount === 9){
    $('#b').css("font-family", "'Londrina Solid', cursive");
    $('#b').css('color', 'black');
  } else if(winCount === 10){
    $rainImg.css('visibility', 'visible');
    $playerToothpicks.css('visibility', 'visible');
    $dealerToothpicks.css('visibility', 'visible');
    showMessage("Congrats! You've entered Rainman Mode. Rainman has been counting cards and he'll show you who has the advantage based on MIT's High-Low card counting strategy. Watch the toothpicks to see who has the edge")

  }
}

var showOpenBook = function(){
  $bookImg.css('visibility', 'hidden');
  $openBookImg.css('visibility', 'visible');
}

var showBook = function(){
  $openBookImg.css('visibility', 'hidden');
  $bookImg.css('visibility', 'visible');
}

var bookSay = function(){
  if(getScore(playerHandArr) >= 17){
    showStand();
  }else if(getScore(playerHandArr) === 16 && dealerHandArr[1].pointVal <= 6){
    showStand();
  }else if(getScore(playerHandArr) === 16 && dealerHandArr[1].pointVal > 6){
    showHit();
  }else if(getScore(playerHandArr) === 15 && dealerHandArr[1].pointVal <= 6){
    showStand();
  }else if(getScore(playerHandArr) === 15 && dealerHandArr[1].pointVal > 6){
    showHit();
  }else if(getScore(playerHandArr) === 14 && dealerHandArr[1].pointVal <= 6){
    showStand();
  }else if(getScore(playerHandArr) === 14 && dealerHandArr[1].pointVal > 6){
    showHit();
  }else if(getScore(playerHandArr) === 13 && dealerHandArr[1].pointVal <= 6){
    showStand();
  }else if(getScore(playerHandArr) === 13 && dealerHandArr[1].pointVal > 6){
    showHit();
  }else if(getScore(playerHandArr) === 12 && dealerHandArr[1].pointVal <= 3){
    showHit();
  }else if(getScore(playerHandArr) === 12 && dealerHandArr[1].pointVal > 3 && dealerHandArr[1].pointVal < 7){
    showStand();
  }else if(getScore(playerHandArr) === 12 && dealerHandArr[1].pointVal >= 7){
    showHit();
  }else if(getScore(playerHandArr) === 11 && dealerHandArr[1].pointVal <= 10){
    showBookDD();
  }else if(getScore(playerHandArr) === 11 && dealerHandArr[1].faceVal === 'ace'){
    showHit();
  }else if(getScore(playerHandArr) === 10 && dealerHandArr[1].pointVal <= 9){
    showBookDD();
  }else if(getScore(playerHandArr) === 10 && dealerHandArr[1].pointVal > 9){
    showHit();
  }else if(getScore(playerHandArr) === 9 && dealerHandArr[1].pointVal === 2){
    showHit();
  }else if(getScore(playerHandArr) === 9 && dealerHandArr[1].pointVal > 2 && dealerHandArr[1].pointVal <= 6){
    showBookDD();
  }else if(getScore(playerHandArr) === 9 && dealerHandArr[1].pointVal > 6){
    showHit();
  }else if(getScore(playerHandArr) <= 8){
    showHit();
  }
}


var showStand = function(){
  bookSelector = 1
};

var showHit = function(){
  bookSelector = 2
}

var showBookDD = function(){
  bookSelector = 3
}

var hideStandBookImg = function(){
  $standBookImg.css('visibility', 'hidden');
}

var hideHitBookImg = function(){
  $hitBookImg.css('visibility', 'hidden');
}

var hideDDBookImg = function(){
  $ddBookImg.css('visibility', 'hidden');
}

var displayBookSay = function(){
  if(bookSelector === 1){
    $standBookImg.css('visibility', 'visible');
    setTimeout(hideStandBookImg, 3000);
  }else if(bookSelector === 2){
    $hitBookImg.css('visibility', 'visible');
    setTimeout(hideHitBookImg, 3000);
  }else if(bookSelector === 3){
    $ddBookImg.css('visibility', 'visible');
    setTimeout(hideDDBookImg, 3000);
  }
}

var rainCount = 0;
window.rainCount = rainCount;

var rainManMode = function(){
  for(var i = 0; i < shoeArr.length; i++){
    if(shoeArr[i].pointVal >= 10){
      rainCount = rainCount + 1;
    }else if(shoeArr[i].pointVal <= 6){
      rainCount = rainCount - 1;
    }
  }
  console.log("rainCount = " + rainCount);
  toothpicks();
}

var toothpicks = function(){
  $playerToothpicks.empty();
  $dealerToothpicks.empty();
  if(rainCount > 0){
    for(var i = 0; i < rainCount; i++){
      var $playerPick = $('<img>');
      $playerPick.attr('src', 'images/toothpick.png');
      $playerPick.addClass('pick');
      $playerToothpicks.append($playerPick);
    }
  }else if(rainCount < 0){
    for(var i = 0; i < -rainCount; i++){
      var $dealerPick = $('<img>');
      $dealerPick.attr('src', 'images/toothpick.png');
      $dealerPick.addClass('pick');
      $dealerToothpicks.append($dealerPick);
    }
  }
}

// var rainManMode = function(){
//   var rainShoe = Array.from(shoeArr);
//   rainShoe.push(dealerHandArr[0]);
//   console.log(dealerHandArr);
//   console.log(rainShoe);
//   var beatCardCount = 0;
//   var lowBeat = (getScore(playerHandArr)-dealerHandArr[1].pointVal)+1;
//   console.log(lowBeat);
//   if(lowBeat <= 11 && getScore(playerHandArr) > 11){
//     for(var i = 0; i < rainShoe.length; i++){
//       if(rainShoe[i].pointVal >= lowBeat){
//         beatCardCount = beatCardCount + 1;
//       }
//     }
//     lowBeatChance = (beatCardCount / rainShoe.length) * 100;
//     console.log(beatCardCount);
//     console.log('There is a ' + lowBeatChance + '% chance that the dealer has you beat');
//   }else if((getScore(playerHandArr) === 9 || getScore(playerHandArr) === 10 || getScore(playerHandArr) === 11) ){
//
//   }
// }

// var rainManMode = function(){
//   var rainShoe = Array.from(shoeArr);
//   rainShoe.push(dealerHandArr[0]);
//   console.log(dealerHandArr);
//   console.log(rainShoe);
//   if(getScore(playerHandArr) >= 17){
//     showStand();
//   }else if(getScore(playerHandArr) === 16 && dealerHandArr[1].pointVal <= 6){
//     showStand();
//   }else if(getScore(playerHandArr) === 16 && dealerHandArr[1].pointVal > 6){
//     showHit();
//   }else if(getScore(playerHandArr) === 15 && dealerHandArr[1].pointVal <= 6){
//     showStand();
//   }else if(getScore(playerHandArr) === 15 && dealerHandArr[1].pointVal > 6){
//     showHit();
//   }else if(getScore(playerHandArr) === 14 && dealerHandArr[1].pointVal <= 6){
//     showStand();
//   }else if(getScore(playerHandArr) === 14 && dealerHandArr[1].pointVal > 6){
//     showHit();
//   }else if(getScore(playerHandArr) === 13 && dealerHandArr[1].pointVal <= 6){
//     showStand();
//   }else if(getScore(playerHandArr) === 13 && dealerHandArr[1].pointVal > 6){
//     showHit();
//   }else if(getScore(playerHandArr) === 12 && dealerHandArr[1].pointVal <= 3){
//     showHit();
//   }else if(getScore(playerHandArr) === 12 && dealerHandArr[1].pointVal > 3 && dealerHandArr[1].pointVal < 7){
//     showStand();
//   }else if(getScore(playerHandArr) === 12 && dealerHandArr[1].pointVal >= 7){
//     showHit();
//   }else if(getScore(playerHandArr) === 11 && dealerHandArr[1].pointVal <= 10){
//     showBookDD();
//   }else if(getScore(playerHandArr) === 11 && dealerHandArr[1].faceVal === 'ace'){
//     showHit();
//   }else if(getScore(playerHandArr) === 10 && dealerHandArr[1].pointVal <= 9){
//     showBookDD();
//   }else if(getScore(playerHandArr) === 10 && dealerHandArr[1].pointVal > 9){
//     showHit();
//   }else if(getScore(playerHandArr) === 9 && dealerHandArr[1].pointVal === 2){
//     showHit();
//   }else if(getScore(playerHandArr) === 9 && dealerHandArr[1].pointVal > 2 && dealerHandArr[1].pointVal <= 6){
//     showBookDD();
//   }else if(getScore(playerHandArr) === 9 && dealerHandArr[1].pointVal > 6){
//     showHit();
//   }else if(getScore(playerHandArr) <= 8){
//     showHit();
//   }
// }


$bigShoeImg.on('click', populateBigShoe);
$shoeImg.on('click', populateSmallShoe);
$deckImg.on('click', populateDeckShoe);
$dealImg.on('click', dealEm);
$hitImg.bind('click', hitPlayer);
$standImg.on('click', stand);
$message.on('click', hideMessage);
$atmImg.on('click', getCash);
$newGame.on('click', newGame);
$newGame.hover(darkNewGame, lightNewGame);
$ddImg.on('click', doubleDown);
$plusImg.on('click', addAllChips);
$minusImg.on('click', minusAllChips);
$chipChange.on('click', showHidePlusMinus);
$directions.on('click', removeDirections);
$keyImg.hover(darkKey, lightKey);
$keyImg.on('click', showFullKey);
$keyClose.on('click', hideFullKey);
$keyNewGame.hover(newGameMss, keyMssClear);
$keyBigShoe.hover(bigShoeMss, keyMssClear);
$keyShoe.hover(shoeMss, keyMssClear);
$keyDeck.hover(deckMss, keyMssClear);
$keyDeal.hover(dealMss, keyMssClear);
$keyHit.hover(hitMss, keyMssClear);
$keyStand.hover(standMss, keyMssClear);
$keyDD.hover(ddMss, keyMssClear);
$keyATM.hover(atmMss, keyMssClear);
$keyChipStack.hover(chipChangeMss, keyMssClear);
$keyPlus.hover(plusMss, keyMssClear);
$keyMinus.hover(minusMss, keyMssClear);
$keyChip5.hover(chip5Mss, keyMssClear);
$keyChip10.hover(chip10Mss, keyMssClear);
$keyChip25.hover(chip25Mss, keyMssClear);
$keyChip100.hover(chip100Mss, keyMssClear);
$bookDiv.hover(showOpenBook, showBook);
$openBookImg.on('click', displayBookSay);















////////////////////////////////////////////////
});
