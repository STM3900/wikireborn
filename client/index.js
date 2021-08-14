const status = document.querySelector(".status");
const statusIcon = document.querySelector(".status-icon");
const players = document.querySelector(".players");
const max = document.querySelector(".max");
const version = document.querySelector(".version");

const getStatus = (data) => {
  return data.status == "on" ? "allumé" : "éteint";
};

const formatVersion = (version) => {
  return version.slice(6);
};

(async () => {
  const response = await fetch("http://localhost:3000/getdata");
  const data = await response.json();
  const formatedData = data.data[0];

  status.innerHTML = getStatus(formatedData);
  getStatus(formatedData) == "on"
    ? (statusIcon.style.color = "#bc4749")
    : (statusIcon.style.color = "#6a994e");

  players.innerHTML = formatedData.players.online;
  max.innerHTML = formatedData.players.max;
  version.innerHTML = formatVersion(formatedData.version);
})();
