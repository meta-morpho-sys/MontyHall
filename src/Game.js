function Game(){
    this.boxYantra = 'empty.1';
    this.boxStruma = 'empty.2';
    this.boxMezdra = 'empty.3';
    this.boxes = [this.boxYantra, this.boxStruma, this.boxMezdra]
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
    var selectedBox;
    return selectedBox = this.boxes[Math.floor(Math.random() * this.boxes.length)] = 'with prize';
};

Game.prototype.resetBoxes = function(){
    this.boxes.forEach(function(box){
        box = 'empty'
    })
};



