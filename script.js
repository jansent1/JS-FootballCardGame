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
      position: "verdediger",
      number: 5,
      isCaptain: true,
      nickname: "De Kromme",
    },
    {
      name: "Finidi George",
      position: "aanvaller",
      number: 7,
      isCaptain: false,
      nickname: "De Fin",
    },
    {
      name: "Frank de Boer",
      position: "verdediger",
      number: 4,
      isCaptain: false,
      nickname: "De Kanon",
    },
    {
      name: "Ronald de Boer",
      position: "middenvelder",
      number: 6,
      isCaptain: false,
      nickname: "De Tweeling",
    },
    {
      name: "Clarence Seedorf",
      position: "middenvelder",
      number: 10,
      isCaptain: false,
      nickname: "De Generaal",
    },
    {
      name: "Edgar Davids",
      position: "middenvelder",
      number: 8,
      isCaptain: false,
      nickname: "De Pitbull",
    },
    {
      name: "Jari Litmanen",
      position: "aanvaller",
      number: 9,
      isCaptain: false,
      nickname: "The King",
    },
    {
      name: "Peter van Vossen",
      position: "aanvaller",
      number: 11,
      isCaptain: false,
      nickname: "De Vos",
    },
    {
      name: "Edwin van der Sar",
      position: "doelman",
      number: 1,
      isCaptain: false,
      nickname: "De Slang",
    },
    {
      name: "Fred Grim",
      position: "doelman",
      number: 28,
      isCaptain: false,
    },
    {
      name: "Michael Reiziger",
      position: "verdediger",
      number: 2,
      isCaptain: false,
      nickname: "De Snelle",
    },
    {
      name: "Sonny Silooy",
      position: "middenvelder",
      number: 3,
      isCaptain: false,
      nickname: "De Mister",
    },
    {
      name: "Winston Bogarde",
      position: "verdediger",
      number: 12,
      isCaptain: false,
      nickname: "De Stopper",
    },
    {
      name: "Nwankwo Kanu",
      position: "aanvaller",
      number: 14,
      isCaptain: false,
      nickname: "Papilo",
    },
    {
      name: "Michel Kreek",
      position: "verdediger",
      number: 16,
      isCaptain: false,
    },
    {
      name: "Nordin Wooter",
      position: "verdediger",
      number: 22,
      isCaptain: false,
    },
    {
      name: "Marc Overmars",
      position: "aanvaller",
      number: 17,
      isCaptain: false,
      nickname: "De Storm",
    },
    {
      name: "Tarik Oulida",
      position: "aanvaller",
      number: 21,
      isCaptain: false,
    },
    {
      name: "Richard Witschge",
      position: "middenvelder",
      number: 18,
      isCaptain: false,
      nickname: "De Maestro",
    },
    {
      name: "Martijn Reuser",
      position: "middenvelder",
      number: 19,
      isCaptain: false,
    },
    {
      name: "Frank Rijkaard",
      position: "middenvelder",
      number: 8,
      isCaptain: false,
      nickname: "De Keizer",
    },
    {
      name: "Kiki Musampa",
      position: "middenvelder",
      number: 27,
      isCaptain: false,
    },
    {
      name: "John van den Brom",
      position: "middenvelder",
      number: 24,
      isCaptain: false,
    },
  ],
};
