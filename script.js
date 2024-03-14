// Variables for the HTML elements:
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

// Data Structure that holds the data of our football team:
const myFavoriteFootballTeam = {
  team: "AFC Ajax",
  sport: "Football",
  year: 1995,
  isChampionsLeagueWinner: true,
  headCoach: { coachName: "Louis van Gaal", matches: 286 },
  players: [
    {
      name: "Patrick Kluivert",
      position: "forward",
      number: 15,
      isCaptain: false,
      nickname: "The Black Panther",
    },
    {
      name: "Danny Blind",
      position: "defender",
      number: 5,
      isCaptain: true,
      nickname: "De Kromme",
    },
    {
      name: "Finidi George",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "De Fin",
    },
    {
      name: "Frank de Boer",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: "De Kanon",
    },
    {
      name: "Ronald de Boer",
      position: "midfielder",
      number: 6,
      isCaptain: false,
      nickname: "De Tweeling",
    },
    {
      name: "Clarence Seedorf",
      position: "midfielder",
      number: 10,
      isCaptain: false,
      nickname: "De Generaal",
    },
    {
      name: "Edgar Davids",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      nickname: "De Pitbull",
    },
    {
      name: "Jari Litmanen",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: "The King",
    },
    {
      name: "Peter van Vossen",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "De Vos",
    },
    {
      name: "Edwin van der Sar",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: "De Slang",
    },
    {
      name: "Fred Grim",
      position: "goalkeeper",
      number: 28,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Michael Reiziger",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: "De Snelle",
    },
    {
      name: "Sonny Silooy",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "De Mister",
    },
    {
      name: "Winston Bogarde",
      position: "defender",
      number: 12,
      isCaptain: false,
      nickname: "De Stopper",
    },
    {
      name: "Nwankwo Kanu",
      position: "forward",
      number: 14,
      isCaptain: false,
      nickname: "Papilo",
    },
    {
      name: "Michel Kreek",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nordin Wooter",
      position: "defender",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marc Overmars",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: "De Storm",
    },
    {
      name: "Tarik Oulida",
      position: "forward",
      number: 21,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Richard Witschge",
      position: "midfielder",
      number: 18,
      isCaptain: false,
      nickname: "De Maestro",
    },
    {
      name: "Martijn Reuser",
      position: "midfielder",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Frank Rijkaard",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      nickname: "De Keizer",
    },
    {
      name: "Kiki Musampa",
      position: "midfielder",
      number: 27,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "John van den Brom",
      position: "midfielder",
      number: 24,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);

// Destructured objects:
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

// Display Team Info on screen:
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

// Show player cards based on dropdown menu selection:
const setPlayerCards = (arr = players) => {
  // Map through arr and store name, position etc of each player in a variable:
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
      <div class="player-card">
        <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
        <p>Position: ${position}</p>
        <p>Number: ${number}</p>
        <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
      </div>
    `
    )
    // Remove commas between each player-card:
    .join("");
};

// Detect user input (e represents an object which contains information for the event):
playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
    default:
      setPlayerCards();
  }
});
