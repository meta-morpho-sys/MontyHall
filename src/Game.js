function Game(){
    this.boxOne = 'empty1';
    this.boxTwo = 'empty2';
    this.boxThree = 'empty3';
    this.boxes = [this.boxOne, this.boxTwo, this.boxThree];
    this.playersChoice = null;
}

Game.prototype.isBoxEmpty = function(box){
    if (box.startsWith('empty')){
        console.log('empty');
        return true
    } else {
        console.log('prize');
        return false;
    }
};

Game.prototype.getBoxNumber = function () {
    return Math.floor(Math.random() * this.boxes.length);
};
// returns a string
Game.prototype.setPrize = function() {
    return this.prize = this.boxes[this.getBoxNumber()] = 'with prize';
};

Game.prototype.resetBoxes = function(){
    this.boxes.forEach(function(box){
        box = 'empty'
    })
};

Game.prototype.selectBox = function() {
  var selectedBoxIndex = this.getBoxNumber();
  return this.playersChoice = selectedBoxIndex;
};

Game.prototype.openBox = function() {
    var that = this;
    function isOpenable(boxValue) {
        return boxValue!== that.boxes[that.playersChoice] && boxValue !== that.prize;
    }
    return this.boxes.find(isOpenable);
};
