fetch('./yourcdn.json')
  .then((hi) => hi.json())
  .then((sexycdn) => {
    sexycdn.forEach((cdnnnn) => {
    let cdn = cdnnnn;
  fetch('./json/list.json')
  .then((lessgooo) => lessgooo.json())
  .then((games) => {
    games.forEach((game) => {
      const gamecontainmentchamber = document.createElement('div');
      const gamerdiv = document.querySelector('.frame-main');
      const gamesbutton = document.querySelector('.classes');
      const gamerNavigaton = gamerdiv.querySelector('.frame-bar');
      const gamerframer = document.getElementById('homework');
      gamecontainmentchamber.className = 'class';
      gamecontainmentchamber.innerHTML = `<img src="${cdn + "/" + game.gameroot + "/" + game.gameicon}" onerror="this.src='./imgs/noicon.png'"/>`;
      gamecontainmentchamber.innerHTML += `<h1>${game.game}</h1>`;
      gamesbutton.appendChild(gamecontainmentchamber);

      gamecontainmentchamber.onclick = (e) => {
        gamesbutton.classList.add('hidden');
        gamerdiv.classList.remove('hidden');
        gamerframer.src = `${cdn + "/" + game.gameroot}`;
      };
      gamerNavigaton.querySelector('#close').addEventListener('click', (e) => {
        gamesbutton.classList.remove('hidden');
        gamerdiv.classList.add('hidden');
        gamerframer.src = '';
      });
      gamerNavigaton.querySelector('#fullscreen').addEventListener('click', (e) => {
        if (!document.fullscreenElement) {
            gamerframer.requestFullscreen();
        }
    });
  });
  })
  .catch((e) => {
    alert('There was an error either your pc bad or the games are updating lul');
    alert(e);
  });
});
})

  function ddiissccoorrdd() {
        var urlObj = new window.URL(window.location.href);
        var url = window.location.protocol + window.location.hostname + "/others/dc.html";

        if (url) {
          win = window.open();
          win.document.body.style.margin = '0';
          win.document.body.style.height = '100vh';
          var iframe = win.document.createElement('iframe');
          iframe.style.border = 'none';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.margin = '0';
          iframe.src = url;
          win.document.body.appendChild(iframe);
        }
  }

  function emJS() {
    var urlObj = new window.URL(window.location.href);
    var url = window.location.protocol + window.location.hostname + "/others/emJS/index.html";

    if (url) {
      win = window.open();
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      var iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = url;
      win.document.body.appendChild(iframe);
    }
}