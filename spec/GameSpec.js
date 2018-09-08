describe('Game', function () {
    var host, player;

    beforeEach(function() {
        host = new Game();
    });

    xit('has three empty boxes at the beginning', function(){
        expect(montyHall.isBoxEmpty).toBeTruthy();
    });

    it('> assigns the selected box to contain the prizeBox', function(){
        spyOn(Math, 'random').and.returnValue(0);
        host.setPrize();
        expect(host.prizeBox).toEqual(0);
    });

    it('> resets the boxes to be empty', function(){
        host.setPrize();
        host.resetBoxes();
        expect(host.prizeBox).toBeNull()
    });

    xit('> picks a box for the player', function(){
        // return value 0-0.3 --> the 0th element (boxOne)
        spyOn(Math, 'random').and.returnValue(0);
        host.selectBox();
        expect(host.playersChoice).toEqual(0)
    });

    xdescribe('> opens another box', function(){
        it(">> when the prizeBox box and player's box coincide", function() {
            spyOn(Math, 'random').and.returnValue(0);
            var prize = host.setPrize();

            jasmine.getEnv().allowRespy(true);
            spyOn(Math, 'random').and.returnValue(0);
            var playersBox = host.selectBox();

            var optionedBox = host.boxes[0];
            var openedBox = host.getOpenBox();

            expect(openedBox).toBeGreaterThan(optionedBox);
            expect(host.getOpenBox()).not.toEqual(playersBox);
            expect(host.getOpenBox()).not.toEqual(prize);
        });

        it(">> when the prizeBox box and and player's box differ", function(){
            spyOn(Math, 'random').and.returnValue(0);
            var prize = host.setPrize();

            jasmine.getEnv().allowRespy(true);
            spyOn(Math, 'random').and.returnValue(0.7);
            var selectedBox = host.selectBox();

            expect(host.getOpenBox()).toEqual('empty2');
            expect(host.getOpenBox()).not.toEqual(selectedBox);
            expect(host.getOpenBox()).not.toEqual(prize);
        })
    })
});
