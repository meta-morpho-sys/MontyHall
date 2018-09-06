describe('Game', function () {
    var game;

    it('has three empty boxes at the beginning', function(){
        game = new Game();
        expect(game.isBoxEmpty).toBeTruthy();
    });

    it('assigns the selected box to contain the prize', function(){
        game = new Game();
        var selectedBox = game.boxes[1];
        spyOn(Math, 'random').and.returnValue(0.5);
        game.setPrize();
        expect(game.isBoxEmpty(selectedBox)).toBeFalsy();
    });

    it('resets the boxes to be empty', function(){
        game = new Game();
        playedBoxes = game.setPrize();
        game.resetBoxes();
        expect(game.isBoxEmpty).toBeTruthy()
    })
});
