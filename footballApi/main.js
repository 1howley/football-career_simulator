var cleaned = false;
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

function randomTeam(){
  fetch(`https://v3.football.api-sports.io/fixtures?league=${id}&season=${2023}&date=${today}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(error => console.log('error', error));
}

function cleanInput() {
  if (cleaned == false) {
    cleaned = true;
    document.getElementById("info").value = "";
    document.getElementById("infoName").value = "";
  }
}

function start() {
  let info = document.getElementById("info").readOnly = true;
  let infoName = document.getElementById("infoName").readOnly = true;
  document.getElementById("info").style.cursor = "no-drop";
  document.getElementById("infoName").style.cursor = "no-drop";
}