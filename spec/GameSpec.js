describe('Host', function () {
    var host, player;

    beforeEach(function() {
        host = new Host();
    });

    it('> assigns the selected box to contain the prizeBox', function(){
        spyOn(Math, 'random').and.returnValue(0);
        host.setPrize();
        expect(host.prizeBox).toEqual(0);
    });

    it('> resets the boxes to be empty', function(){
        host.setPrize();
        host.getPlayersBox();
        host.resetBoxes();
        expect(host.prizeBox).toBeNull();
        expect(host.playersBox).toBeNull()
    });

    it('> picks a box for the player', function(){
        // return value 0-0.3 --> the 0th element (boxOne)
        spyOn(Math, 'random').and.returnValue(0);
        host.getPlayersBox();
        expect(host.playersBox).toEqual(0)
    });

    describe('> opens another box', function(){
        it(">> when the prizeBox box and player's box coincide", function() {
            spyOn(Math, 'random').and.returnValue(0);
            var prize = host.setPrize();

            jasmine.getEnv().allowRespy(true);
            spyOn(Math, 'random').and.returnValue(0);
            var playersBox = host.getPlayersBox();

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
            var selectedBox = host.getPlayersBox();

            expect(host.getOpenBox()).toEqual(1);
            expect(host.getOpenBox()).not.toEqual(selectedBox);
            expect(host.getOpenBox ()).not.toEqual(prize);
        })
    })
});
