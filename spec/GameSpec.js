describe('Game', function () {
    var montyHall, player;

    beforeEach(function() {
        montyHall = new Game();
        player = jasmine.createSpyObj('player', ['selectBox', 'makeFinalChoice']);
    });

    it('has three empty boxes at the beginning', function(){
        expect(montyHall.isBoxEmpty).toBeTruthy();
    });

    it('assigns the selected box to contain the prize', function(){
        spyOn(Math, 'random').and.returnValue(0.5);
        var selectedBox = montyHall.setPrize();
        expect(montyHall.isBoxEmpty(selectedBox)).toBeFalsy();
    });

    it('resets the boxes to be empty', function(){
        montyHall.setPrize();
        montyHall.resetBoxes();
        expect(montyHall.isBoxEmpty).toBeTruthy()
    });
});
