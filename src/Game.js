function Game(){
    this.boxOne = 'empty.1';
    this.boxTwo = 'empty.2';
    this.boxThree = 'empty.3';
    this.boxes = [this.boxOne, this.boxTwo, this.boxThree]
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



