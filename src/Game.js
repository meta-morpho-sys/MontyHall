function Game(){
    var boxYantra = 'empty.1';
    var boxStruma = 'empty.2';
    var boxMezdra = 'empty.3';
    this.boxes = [boxYantra, boxStruma, boxMezdra]
}

Game.prototype.isBoxEmpty = function(){
    this.boxes.forEach(function(box){
        if (box.startsWith('empty')){
            console.log('empty');
            return true
        } else {
            console.log('prize');
            return false;
        }
    });
};

Game.prototype.setPrize = function() {
    var selectedBox =  this.boxes[Math.floor(Math.random() * this.boxes.length)] = 'with prize';
};

Game.prototype.resetBoxes = function(){
    this.boxes.forEach(function(box){
        box = 'empty'
    })
};



