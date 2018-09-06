describe('Game', function () {
    var game;

    it('has three empty boxes at the beginning', function(){
        expect(montyHall.isBoxEmpty).toBeTruthy();
    });

    it('assigns the selected box to contain the prize', function(){
        spyOn(Math, 'random').and.returnValue(0.5);
        var selectedBox = game.setPrize();
        expect(game.isBoxEmpty(selectedBox)).toBeFalsy();
    });

    it('resets the boxes to be empty', function(){
        montyHall.setPrize();
        montyHall.resetBoxes();
        expect(montyHall.isBoxEmpty).toBeTruthy()
    });
});
