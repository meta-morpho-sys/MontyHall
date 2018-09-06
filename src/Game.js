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

// returns a string
Game.prototype.setPrize = function() {
    return this.boxes[Math.floor(Math.random() * this.boxes.length)] = 'with prize';
};

Game.prototype.resetBoxes = function(){
    this.boxes.forEach(function(box){
        box = 'empty'
    })
};

Game.prototype.selectBox = function() {
  var selectedBoxIndex = Math.floor(Math.random() * this.boxes.length);
    return this.playersChoice = selectedBoxIndex;
};

