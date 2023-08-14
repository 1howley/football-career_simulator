var cleaned = false;

function cleanInput() {
  if (cleaned == false) {
    cleaned = true;
    document.getElementById("info").value = "";
    document.getElementById("infoName").value = "";
  }
}

function start() {
  document.getElementById("info").readOnly = true;
  document.getElementById("infoName").readOnly = true;
  document.getElementById("info").style.cursor = "no-drop";
  document.getElementById("infoName").style.cursor = "no-drop";

  c = new FootballApi();
  c.getRandomTeam();

}
