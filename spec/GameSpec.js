describe('Game', function () {
    var host, player;

    beforeEach(function() {
        host = new Game();
    });

    it('> assigns the selected box to contain the prizeBox', function(){
        spyOn(Math, 'random').and.returnValue(0);
        host.setPrize();
        expect(host.prizeBox).toEqual(0);
    });

    it('> resets the boxes to be empty', function(){
        host.setPrize();
        host.selectBox();
        host.resetBoxes();
        expect(host.prizeBox).toBeNull();
        expect(host.playersBox).toBeNull()
    });

    xit('> picks a box for the player', function(){
        // return value 0-0.3 --> the 0th element (boxOne)
        spyOn(Math, 'random').and.returnValue(0);
        host.selectBox();
        expect(host.playersBox).toEqual(0)
    });

    xdescribe('> opens another box', function(){
        it(">> when the prizeBox box and player's box coincide", function() {
            spyOn(Math, 'random').and.returnValue(0);
            var prize = host.setPrize();

            jasmine.getEnv().allowRespy(true);
            spyOn(Math, 'random').and.returnValue(0);
            var playersBox = host.selectBox();

            var optionedBox = host.boxes[0];
            var openedBox = host.openBox();

            expect(openedBox).toBeGreaterThan(optionedBox);
            expect(host.openBox()).not.toEqual(playersBox);
            expect(host.openBox()).not.toEqual(prize);
        });

        it(">> when the prizeBox box and and player's box differ", function(){
            spyOn(Math, 'random').and.returnValue(0);
            var prize = host.setPrize();

            jasmine.getEnv().allowRespy(true);
            spyOn(Math, 'random').and.returnValue(0.7);
            var selectedBox = host.selectBox();

            expect(host.openBox()).toEqual(1);
            expect(host.openBox()).not.toEqual(selectedBox);
            expect(host.openBox ()).not.toEqual(prize);
        })
    })
});
