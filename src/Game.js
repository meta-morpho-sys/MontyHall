function Game(){
    this.boxes = [0, 1, 2]; // these are my boxes
    this.prizeBox = null;
    this.playersChoice = null;
}
// model "box" as an integer 0,1,2
// have this.prizeBox be assigned an integer instead of a string
// now you can get rid of names like 'indexOfThis', 'indexOfThat'
// have a this.player and make it behave like this.prizeBox (
// Game.prototype.isBoxEmpty = function(box){
//     if (this.boxes[box].startsWith('empty')){
//         console.log('empty');
//         return true
//     } else {
//         console.log('prizeBox');
//         return false;
//     }
// };

Game.prototype.getBoxNumber = function () {
    return Math.floor(Math.random() * this.boxes.length);
};

// assigns an integer 0,1 or 2 to the prizeBox instance variable
Game.prototype.setPrize = function() {
    var prizeBoxIndex = this.getBoxNumber();
    return this.prizeBox = this.boxes[prizeBoxIndex];
};

Game.prototype.resetBoxes = function(){
    this.prizeBox = null
};

Game.prototype.selectBox = function() {
  var selectedBoxIndex = this.getBoxNumber();
  return this.playersChoice = selectedBoxIndex;
};

Game.prototype.openBox = function() {
    var that = this;
    function isOpenable(boxValue) {
        return boxValue!== that.boxes[that.playersChoice] && boxValue !== that.prizeBox;
    }
    return this.boxes.find(isOpenable);
};
