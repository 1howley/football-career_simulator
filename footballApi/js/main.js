var cleaned = false;
var clicked = 0;

function cleanInput() {
  if (cleaned == false) {
    cleaned = true;
    document.getElementById("info").value = "";
    document.getElementById("infoName").value = "";
  }
}

async function start() {
  document.getElementById("info").readOnly = true;
  document.getElementById("infoName").readOnly = true;
  document.getElementById("info").style.cursor = "no-drop";
  document.getElementById("infoName").style.cursor = "no-drop";
  var team1 = document.getElementById("team-1");
  var team2 = document.getElementById("team-2");
  
  c = new FootballApi();
  var randomTeam = await c.getRandomTeam();
  var randomTeam2  = await c.getRandomTeam();

  team1.innerHTML = randomTeam;
  team2.innerHTML = randomTeam2;
}

function setTeam(element) {
  clicked++;
  if(clicked > 1) {
    document.getElementById('stay').ariaDisabled = "false";
  }
  var vetor = [];
  vetor = ageVetor();
  text = document.getElementById(element).innerHTML
  vetor[clicked].innerHTML = text;
}

function ageVetor() {
  var vetor = [];

  for(x = 1; x <= 6; x++) {
    text = x.toString();
    console.log(text);
    vetor[x-1] = document.getElementById('team1'.replace('1', text));
  }
  return vetor;
}