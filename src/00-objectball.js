const brooklynNetsPlayers = {
  "Alan Anderson": {
    number: 0,
    shoe: 16,
    points: 22,
    rebounds: 12,
    assists: 12,
    steals: 3,
    blocks: 1,
    slamDunks: 1,
  },
  "Reggie Evans": {
    number: 30,
    shoe: 14,
    points: 12,
    rebounds: 12,
    assists: 12,
    steals: 12,
    blocks: 12,
    slamDunks: 7,
  },
  "Brook Lopez": {
    number: 11,
    shoe: 17,
    points: 17,
    rebounds: 19,
    assists: 10,
    steals: 3,
    blocks: 1,
    slamDunks: 15,
  },
  "Mason Plumlee": {
    number: 1,
    shoe: 19,
    points: 26,
    rebounds: 12,
    assists: 6,
    steals: 3,
    blocks: 8,
    slamDunks: 5,
  },
  "Jason Terry": {
    number: 31,
    shoe: 15,
    points: 19,
    rebounds: 2,
    assists: 2,
    steals: 4,
    blocks: 11,
    slamDunks: 1,
  },
};
const charlotteHornetsPlayers = {
  "Jeff Adrien": {
    number: 4,
    shoe: 18,
    points: 10,
    rebounds: 1,
    assists: 1,
    steals: 2,
    blocks: 7,
    slamDunks: 2,
  },
  "Bismak Biyombo": {
    number: 0,
    shoe: 16,
    points: 12,
    rebounds: 4,
    assists: 7,
    steals: 7,
    blocks: 15,
    slamDunks: 10,
  },
  "DeSagna Diop": {
    number: 2,
    shoe: 14,
    points: 24,
    rebounds: 12,
    assists: 12,
    steals: 4,
    blocks: 5,
    slamDunks: 5,
  },
  "Ben Gordon": {
    number: 8,
    shoe: 15,
    points: 33,
    rebounds: 3,
    assists: 2,
    steals: 1,
    blocks: 1,
    slamDunks: 0,
  },
  "Brendan Haywood": {
    number: 33,
    shoe: 15,
    points: 6,
    rebounds: 12,
    assists: 12,
    steals: 22,
    blocks: 5,
    slamDunks: 12,
  },
};
function gameObject() {
  const statistics = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: brooklynNetsPlayers,
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: charlotteHornetsPlayers,
    },
  };
  return statistics;
}
const statistics = gameObject();
function playerStats(playerName) {
  for (teamKey in statistics) {
    for (playerKey in statistics[teamKey]["players"]) {
      if (playerKey === playerName) {
        return statistics[teamKey]["players"][playerKey];
        break;
      }
    }
  }
  return;
}
function numPointsScored(playerName) {
  return playerStats(playerName)["points"];
}
function shoeSize(playerName) {
  return playerStats(playerName)["shoe"];
}
function teamColors(teamName) {
  for (teamKey in statistics) {
    if (statistics[teamKey]["teamName"] === teamName) {
      return statistics[teamKey]["colors"];
    }
  }
}
function teamNames() {
  const teamList = [];
  for (teamKey in statistics) {
    teamList.push(statistics[teamKey]["teamName"]);
  }
  return teamList;
}
function playerNumbers(teamName) {
  const playerNumberList = [];
  for (teamKey in statistics) {
    if (statistics[teamKey]["teamName"] === teamName) {
      for (playerKey in statistics[teamKey]["players"]) {
        playerNumberList.push(
          statistics[teamKey]["players"][playerKey]["number"]
        );
      }
    }
  }
  return playerNumberList;
}
function mostPointsScored() {
  let mostPointsInfo = {
    playerName: "",
    pointsScored: 0,
  };
  for (teamKey in statistics) {
    for (playerKey in statistics[teamKey]["players"]) {
      if (
        statistics[teamKey]["players"][playerKey]["points"] >
        mostPointsInfo.pointsScored
      ) {
        mostPointsInfo.playerName = playerKey;
        mostPointsInfo.pointsScored =
          statistics[teamKey]["players"][playerKey]["points"];
      }
    }
  }
  return mostPointsInfo;
}
function winningTeam() {
  const winningTeamInfo = {
    teamName: "",
    totalPoints: 0,
  };
  for (teamKey in statistics) {
    totalTeamPoints = 0;
    for (player in statistics[teamKey]["players"]) {
      totalTeamPoints += statistics[teamKey]["players"][player]["points"];
    }
    if (totalTeamPoints > winningTeamInfo.totalPoints) {
      winningTeamInfo.teamName = statistics[teamKey]["teamName"];
      winningTeamInfo.totalPoints = totalTeamPoints;
    }
  }
  return winningTeamInfo;
}
console.log(winningTeam());
const homeTeamPlayers = statistics.home.players;
const awayTeamPlayers = statistics.away.players;
const allPlayers = { ...homeTeamPlayers, ...awayTeamPlayers };
console.log(allPlayers);
