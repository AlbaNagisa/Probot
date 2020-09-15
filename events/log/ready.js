module.exports = (client) => {
  console.log("Je suis prêt");
  const statut = [
    "p!help",
    "Se fait programmer",
    "NodeJS",
    "Pronote"
  ];
  setInterval(function () {
    const statutID = Math.floor(Math.random() * Math.floor(statut.length))
    client.user.setActivity(statut[statutID]);
  }, 5000)
}



