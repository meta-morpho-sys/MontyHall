describe('Game', function () {
    var montyHall, player;

    beforeEach(function() {
        montyHall = new Game();
    });

    it('has three empty boxes at the beginning', function(){
        expect(montyHall.isBoxEmpty).toBeTruthy();
    });

    it('assigns the selected box to contain the prize', function(){
        spyOn(Math, 'random').and.returnValue(0);
        var selectedBox = montyHall.setPrize();
        expect(montyHall.isBoxEmpty(selectedBox)).toBeFalsy();
    });

    it('resets the boxes to be empty', function(){
        montyHall.setPrize();
        montyHall.resetBoxes();
        expect(montyHall.isBoxEmpty).toBeTruthy()
    });

    it('picks a box for the player', function(){
        // return value 0-0.3 --> the 0th element (boxOne)
        spyOn(Math, 'random').and.returnValue(0);
        montyHall.selectBox();
        expect(montyHall.playersChoice).toEqual(0)
    });
});
