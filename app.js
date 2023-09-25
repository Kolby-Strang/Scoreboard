let homeScore = 0
let awayScore = 0

function scoreMod(team, amount) {
    if (team == 'opp' && awayScore + amount >= 0) {
        awayScore += amount
    } else if (team == 'home' && homeScore + amount >= 0) {
        homeScore += amount
    }
    draw()
    if (homeScore >= 11) {
        alert('Home Wins!')
    } else if (awayScore >= 11) {
        alert('Away Wins')
    }
}

function reset() {
    homeScore = 0
    awayScore = 0
    draw()
}

function draw() {
    document.getElementById('home-score').innerHTML = homeScore
    document.getElementById('away-score').innerHTML = awayScore
}