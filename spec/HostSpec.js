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
        var prize;

        beforeEach(function(){
            spyOn(Math, 'random').and.returnValue(0);
            prize = host.setPrize();

            jasmine.getEnv().allowRespy(true);
        });

        describe(">> when the prizeBox box and player's box coincide on box0", function() {
            var playersBox;
            beforeEach(function(){
                spyOn(Math, 'random').and.returnValue(0);
                prize = host.setPrize();

                jasmine.getEnv().allowRespy(true);
                spyOn(Math, 'random').and.returnValue(0);
                playersBox = host.getPlayersBox();
            });

            it(">> randomly opens box1", function() {
                spyOn(Math, 'random').and.returnValue(0.4);
                expect(host.getOpenBox()).toEqual(1);
                expect(host.getOpenBox()).not.toEqual(playersBox);
                expect(host.getOpenBox()).not.toEqual(prize);
            });

            it(">> randomly opens box2", function() {
                spyOn(Math, 'random').and.returnValue(0.8);
                expect(host.getOpenBox()).toEqual(2);
                expect(host.getOpenBox()).not.toEqual(playersBox);
                expect(host.getOpenBox()).not.toEqual(prize);
            });
        });

            it(">> when the prizeBox box and and player's box differ", function(){
            spyOn(Math, 'random').and.returnValue(0.7);
            var selectedBox = host.getPlayersBox();
            expect(host.getOpenBox()).toEqual(1);
            expect(host.getOpenBox()).not.toEqual(selectedBox);
            expect(host.getOpenBox ()).not.toEqual(prize);
        })
    });

    describe('makes Final Choice', function() {
        var prize, playersBox, openedBox;
        describe("when prize and player's initial choice coincide", function() {
            beforeEach(function() {
                spyOn(Math, 'random').and.returnValue(0);
                prize = host.setPrize();

                jasmine.getEnv().allowRespy(true);

                spyOn(Math, 'random').and.returnValue(0);
                playersBox = host.getPlayersBox();

                spyOn(Math, 'random').and.returnValue(0.8);
                openedBox = host.getOpenBox();
            });

            it('>>player confirms his initial choice and wins', function() {
                spyOn(Math, 'random').and.returnValue(0);
                expect(host.makeFinalChoice()).toEqual('Win');
                expect(host.finalChoice).toEqual(prize);
                expect(host.finalChoice).not.toEqual(openedBox)
            });

            it('>>player switches to another box and loses', function() {
                spyOn(Math, 'random').and.returnValue(0.5);
                expect(host.makeFinalChoice()).toEqual('Lost');
                expect(host.finalChoice).not.toEqual(prize);
                expect(host.finalChoice).not.toEqual(openedBox)
            })
        });

        describe("when prize and player's initial choice differ", function () {
            // set Math.random so as to result in the selected item
            // from the array of length arrayLen
            function forceSelection(arrayLen, selectedIndex) {
                var randVal =  selectedIndex / arrayLen;
                spyOn(Math, 'random').and.returnValue(randVal);
            }
            beforeEach(function() {
                forceSelection(3, 0);
                prize = host.setPrize();
                alert(prize);

                jasmine.getEnv().allowRespy(true);

                forceSelection(3, 1);
                playersBox = host.getPlayersBox();
                alert(playersBox);

                forceSelection(1, 0);
                openedBox = host.getOpenBox();
                alert(openedBox);
            });

            it('>>player confirms his initial choice and loses', function() {
                forceSelection(2, 1);
                expect(host.makeFinalChoice()).toEqual('Lost');
                expect(host.finalChoice).not.toEqual(prize);
                expect(host.finalChoice).not.toEqual(openedBox)
            });
        })
    })
});
