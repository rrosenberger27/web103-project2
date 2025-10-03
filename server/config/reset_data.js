const { time } = require("console");

const resetData = [
    {
        team1_name : "Tottenham Hotspur",
        team2_name : "Aston Villa",
        team1_logo : "https://a.espncdn.com/i/teamlogos/soccer/500/20062.png",
        team2_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Aston_Villa_FC_new_crest.svg/887px-Aston_Villa_FC_new_crest.svg.png",
        date : "10/19/2025",
        time: "9:00 AM",
        stadium : "Tottenham Hotspur Stadium",
        city : "North London",
        sport : "Soccer"
    }, 
    {
        team1_name : "Dallas Cowboys",
        team2_name : "New York Jets",
        team1_logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/1200px-Dallas_Cowboys.svg.png",
        team2_logo : "https://upload.wikimedia.org/wikipedia/commons/6/69/New_York_Jets_2024.svg",
        date : "10/5/2025",
        time: "1:00 PM",
        stadium : "MetLife Stadium",
        city : "East Rutherford",
        sport : "Football"
    }, 
    {
        team1_name : "Los Angeles Lakers",
        team2_name : "New York Knicks",
        team1_logo : "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        team2_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png",
        date : "10/5/2025",
        time: "7:30 PM",
        stadium : "Madison Square Garden",
        city : "New York City",
        sport : "Basketball"
    }, 
    {
        team1_name : "Denver Nuggets",
        team2_name : "Miami Heat",
        team1_logo : "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/den.png",
        team2_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/869px-Miami_Heat_logo.svg.png",
        date : "10/5/2025",
        time: "8:00 PM",
        stadium : "Kashian Center",
        city : "Miami",
        sport : "Basketball"
    }, 
    {
        team1_name : "Liverpool",
        team2_name : "Manchester United",
        team1_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/879px-Liverpool_FC.svg.png",
        team2_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1184px-Manchester_United_FC_crest.svg.png",
        date : "10/19/2025",
        time: "9:00 AM",
        stadium : "Anfield",
        city : "Liverpool",
        sport : "Soccer"
    }, 
    {
        team1_name : "Los Angeles Lakers",
        team2_name : "Miami Heat",
        team1_logo : "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        team2_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/869px-Miami_Heat_logo.svg.png",
        date : "10/30/2025",
        time: "8:00 PM",
        stadium : "Kasseya Center",
        city : "Miami",
        sport : "Basketball"
    }, 
    {
        team1_name : "Denver Broncos",
        team2_name : "Philadelphia Eagles",
        team1_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/1200px-Denver_Broncos_logo.svg.png",
        team2_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Philadelphia_Eagles_logo.svg/1200px-Philadelphia_Eagles_logo.svg.png",
        date : "10/5/2025",
        time: "1:00 PM",
        stadium : "Lincoln Financial Field",
        city : "Philadelphia",
        sport : "Football"
    }, 
    {
        team1_name : "Denver Broncos",
        team2_name : "New York Jets",
        team1_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/1200px-Denver_Broncos_logo.svg.png",
        team2_logo : "https://upload.wikimedia.org/wikipedia/commons/6/69/New_York_Jets_2024.svg",
        date : "10/5/2025",
        time: "1:00 PM",
        stadium : "MetLife Stadium",
        city : "East Rutherford",
        state : "New Jersey",
        sport : "Football"
    }, 
    {
        team1_name : "Manchester United",
        team2_name : "Tottenham Hotspur",
        team1_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1184px-Manchester_United_FC_crest.svg.png",
        team2_logo : "https://a.espncdn.com/i/teamlogos/soccer/500/20062.png",
        date : "10/19/2025",
        time: "9:00 AM",
        stadium : "Old Trafford",
        city : "Manchester",
        sport : "Soccer"
    }, 
    {
        team1_name : "Dallas Cowboys",
        team2_name : "Carolina Panthers",
        team1_logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/1200px-Dallas_Cowboys.svg.png",
        team2_logo : "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Carolina_Panthers_logo.svg/1200px-Carolina_Panthers_logo.svg.png",
        date : "10/5/2025",
        time: "1:00 PM",
        stadium : "Bank of America Stadium",
        city : "Charlotte",
        sport : "Football"
    }, 
];

module.exports = { resetData };
