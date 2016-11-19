Create a new shoe
- this should have 52, 312, or 416 cards
- use constructor method to generate and assign suit, value(ace-king), deck, unique id
- if I were to create an array for each key value pair and pop from that array randomly, then I would insure the I'm generating the right number of each card

# Hit and dealer behavior
- place initial bet
- deal cards
- once cards are dealt, check both hands for blackjack. if blackjack return winner and settle up bets. If no blackjack, do nothing
- populate buttons for hit or stand
### If Hit
- add card check for blackjack, check for bust
- if bust settle up and clear, if not do nothing
### If stand
- turn dealer-down card
- if dealer score is less than 17 Hit
- check for bust, check for blackjack, check for under 17
