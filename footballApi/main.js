const id = 1062;
const today = new Date().toISOString().split('T')[0];

var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "97be4ab6f32b05d63a0150bbb002c6b2");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://v3.football.api-sports.io/fixtures?league=${id}&season=${2023}&date=${today}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(error => console.log('error', error));


function setTeamSeleted() {
  let age = 18;
  let teamSelected = document.getElementById("teamSelected")
  for(let x = 0; x < 9; x++) {
    age += 2;
    teamSelected.innerHTML += `<div class="ageCircle">${age}</div><div class="team"></div>`;
  }
}