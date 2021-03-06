/*
Host has 3 boxes [0, 1, 2] and sets one of them to be with a prize (say box 0).
On second turn Host picks one box to be the box chosen by the Player. (say box 2).

Once Host knows which box was chosen by the player, it opens another box which doesn't contain a prize (say box 1)
Player is left with the choice to stick to his initial preference (box 2) or
to switch to the other box (box 0).
My program is exploring whether it is more probable to win:
-- if keeping the initial choice or
-- if switching to the box that wasn't opened by Host nor was subject of players's first choice.
*/

function Host(){
    this.boxes = [0, 1, 2]; // these are my boxes: 0, 1, 2
    this.prizeBox = null;   // null here means not yet assigned
    this.playersBox = null; // ditto
    this.openedBox = null;  // ditto
}

// sets one of the boxes < 0,1 or 2 > to be the prizeBox
Host.prototype.setPrize = function() {
    var boxNum = this._chooseRandomly(this.boxes);
    return this.prizeBox = this.boxes[boxNum];
};

Host.prototype.resetBoxes = function(){
    this.prizeBox = null;
    this.playersBox = null
};

// Host acts as player and picks a box
Host.prototype.getPlayersBox = function() {
  var boxNum = this._chooseRandomly(this.boxes);
  return this.playersBox = boxNum;
};

// Returns the number of box that is not the box with prize nor the box chosen by the player.
// When the prizeBox and playersBox coincide, this method will pick out randomly one of the two remaining boxes.
Host.prototype.getOpenBox = function() {
    var that = this;

    function isOpenable(boxValue) {
        return boxValue!== that.boxes[that.playersBox] && boxValue !== that.prizeBox;
    }
    var result = this.boxes.filter(isOpenable);
    return this.openedBox = this._chooseRandomly(result);
};


// Returns randomly selected element of the array.
Host.prototype._chooseRandomly = function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

Host.prototype.makeFinalChoice = function () {
    var that = this;
    // is it eligible for the final choice?
    function isEligible(boxValue) {
        return boxValue !== that.openedBox;
    }
    var result = this.boxes.filter(isEligible);
    this.finalChoice = this._chooseRandomly(result);
    if (this.finalChoice === this.prizeBox) {
        return 'Win';
    } else {
        return 'Lost';
    }
};
