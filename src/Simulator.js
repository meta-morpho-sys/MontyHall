function simulate(reps) {
    var stayWins = 0;
    var switchWins = 0;
    for (var i = 0; i < reps; i++) {
        var host = new Host();
        host.setPrize();
        host.getPlayersBox();
        host.getOpenBox();
        var result = host.makeFinalChoice();
        var switched = (host.finalChoice !== host.playersBox);
        if(switched) {
            if(result === 'Win') {
                switchWins++
            }
        } else {
            if(result === 'Win') {
                stayWins++
            }
        }
    }
    console.log('Out of ' + reps + ' games');
    console.log('stayed and won = ' + stayWins);
    console.log('switched and won = ' + switchWins);
}
