const id = 39;
const today = new Date().toISOString().split('T')[0];

var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "97be4ab6f32b05d63a0150bbb002c6b2");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};

class FootballApi {
    async getLeague() {
      let vetor = [];
      let x = 0;
  
      try {
        const response = await fetch(`https://v3.football.api-sports.io/teams?league=${id}&season=2023`, requestOptions);
        const result = await response.json();
  
        result.response.forEach(team => {
          vetor[x] = team.team.name;
          x++;
          console.log("Team Name:", team.team.name);
          console.log("-------------------------");
        });
  
        return vetor;
      } catch (error) {
        console.log('error', error);
        return vetor;
      }
    }
  
    async getRandomTeam() {
      const leagueData = await this.getLeague();
      
      if (leagueData.length > 0) {
        const randomIndex = Math.floor(Math.random() * leagueData.length);
        const randomTeam = leagueData[randomIndex];
        console.log("Random Team:", randomTeam);
      } else {
        console.log("No league data available.");
      }
    }
}
  
  