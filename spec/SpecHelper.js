beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});

beforeEach(function () {
    jasmine.addMatchers({
        toBeEmptyBox: function () {
            return {
                compare: function (actual, expected) {
                    var game = actual;

                    return {
                        pass: game.selectedBox === expected && game.isBoxEmpty
                    };
                }
            };
        }
    });
});
