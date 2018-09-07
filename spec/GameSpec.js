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


    it('opens one of the remaining two boxes', function(){
        spyOn(Math, 'random').and.returnValue(0);
        var selectedBox = montyHall.selectBox();
        alert('players box ' + selectedBox);

        jasmine.getEnv().allowRespy(true);
        spyOn(Math, 'random').and.returnValue(0.7);
        var prize = montyHall.setPrize();
        alert('prize ' + prize);

        alert(montyHall.boxes);

        expect(montyHall.openBox()).toEqual('empty2');
        expect(montyHall.openBox()).not.toEqual(selectedBox);
        expect(montyHall.openBox()).not.toEqual(prize);
    })
});
