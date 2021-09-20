let time = [
  {
    nome: "América Mineiro",
    escudo: "./images/AmericaMg.png",
    hino: "./music/AmericaMg.mp4",
    compositor: "Vicente Motta",
  },

  {
    nome: "Athletico Paranaense",
    escudo: "./images/AthleticoPr.png",
    hino: "./music/AthleticoPr.mp4",
    compositor: "Zinder Lins",
  },

  {
    nome: "Atlético Goianiense",
    escudo: "./images/AtleticoGo.png",
    hino: "./music/AtleticoGo.mp4",
    compositor: "Desconhecido",
  },

  {
    nome: "Atlético Mineiro",
    escudo: "./images/AtleticoMineiro.png",
    hino: "./music/AtleticoMg.mp4",
    compositor: "Vicente Motta",
  },

  {
    nome: "Bahia",
    escudo: "./images/Bahia.png",
    hino: "./music/Bahia.mp4",
    compositor: "Adroaldo Ribeiro Costa",
  },

  {
    nome: "Ceara",
    escudo: "./images/Ceara.png",
    hino: "./music/Ceara.mp4",
    compositor: "José Patápio da Costa Jatahy",
  },

  {
    nome: "Chapecoense",
    escudo: "./images/Chapecoense.png",
    hino: "./music/Chapecoense.mp4",
    compositor: "Luiz A. Meyer",
  },

  {
    nome: "Corinthians",
    escudo: "./images/Corinthians.png",
    hino: "./music/Corinthians.mp4",
    compositor: "Lauro D'Avila",
  },

  {
    nome: "Cuiabá",
    escudo: "./images/Cuiaba.png",
    hino: "./music/Cuiaba.mp4",
    compositor: "Pescuma",
  },

  {
    nome: "Flamengo",
    escudo: "./images/Flamengo.png",
    hino: "./music/Flamengo.mp4",
    compositor: "Lamartine Babo",
  },

  {
    nome: "Fluminense",
    escudo: "./images/Fluminense.png",
    hino: "./music/Fluminense.mp4",
    compositor: "Lamartine Babo",
  },

  {
    nome: "Fortaleza",
    escudo: "./images/Fortaleza.png",
    hino: "./music/Fortaleza.mp4",
    compositor: "Jackson De Carvalho",
  },

  {
    nome: "Grêmio",
    escudo: "./images/Gremio.png",
    hino: "./music/Gremio.mp4",
    compositor: "Lupicínio Rodrigues",
  },

  {
    nome: "Internacional",
    escudo: "./images/Internacional.png",
    hino: "./music/Internacional.mp4",
    compositor: "Nélson Silva",
  },

  {
    nome: "Juventude",
    escudo: "./images/Juventude.png",
    hino: "./music/Juventude.mp4",
    compositor: "Ernani Falcão",
  },

  {
    nome: "Palmeiras",
    escudo: "./images/Palmeiras.png",
    hino: "./music/Palmeiras.mp4",
    compositor: "Antonio Sergi",
  },

  {
    nome: "Red Bull Bragantino",
    escudo: "./images/RedBullBragantino.png",
    hino: "./music/RedBullBragantino.mp4",
    compositor: "Sapo e Renato Silva",
  },

  {
    nome: "Santos",
    escudo: "./images/Santos.png",
    hino: "./music/Santos.mp4",
    compositor: "Carlos Henrique Paganetto Roma",
  },

  {
    nome: "São Paulo",
    escudo: "./images/SaoPaulo.png",
    hino: "./music/SaoPaulo.mp4",
    compositor: "Porphyrio da Paz",
  },

  {
    nome: "Sport",
    escudo: "./images/Sport.png",
    hino: "./music/Sport.mp4",
    compositor: "Eunitônio Edir Pereira",
  },
];

// Variaveis
const lista = document.querySelector(".lista");
const info = document.querySelector(".info");
const flex = document.querySelector(".flex");
const burger = document.querySelector("#fechado");
let caixa = document.querySelector(".caixa");
const caixaVolume = document.querySelector(".caixa-volume");
const nomeComp = document.querySelector(".nome-comp");
let volume = document.querySelector("#vol");
let audio = document.createElement("AUDIO");
let img = document.createElement("IMG");
let div = document.createElement("div");
let progressoBar = document.createElement("div");
let progresso = document.createElement("div");
let h3 = document.createElement("h3");
let h2 = document.createElement("h2");
let infoP = document.createElement("p");
let progress = document.createElement("progress");
let ModalErro = document.querySelector(".ModalErro");
let icone = document.getElementsByTagName("i");
let span = document.createElement("span");
let listaTitulo = document.querySelector(".titulo-hino");

let contador = 0;
let controladorMusica = 0;
let intervaloDuracao = 0;

h3.addEventListener("click", tabelaTimes);

function inicial() {
  //Function inicial
  h3.innerHTML = 'Brasileirão Serie A <i class="fas fa-caret-left"></i>';
  h3.className += "select ";
  lista.appendChild(h3);

  let audio = document.querySelector("#vol");
  audio.value = 100;
}

function tabelaTimes() {
  if (div.style.display == "block") {
    div.style.display = "none";
    h3.innerHTML = 'Brasileirão Serie A  <i class="fas fa-caret-left"></i>';
  } else {
    div.style.display = "block";
    h3.innerHTML = 'Brasileirão Serie A  <i class="fas fa-caret-down"></i>';
  }
  div.className = "caixa-times";
  lista.appendChild(div);

  if (contador == 0) {
    criandoTabela();
    contador++;
  }
}

function criandoTabela() {
  for (const indice in time) {
    let p = document.createElement("p");
    p.innerHTML = time[indice].nome;
    p.className = "times";
    div.appendChild(p);

    p.addEventListener("click", function () {
      for (const indice in time) {
        if (p.innerText == time[indice].nome) {
          controladorMusica = indice;

          let Ps = document.querySelectorAll(".times");
          let array = [...Ps];

          for (const indice in time) {
            if (array[indice].id == "estilo") {
              array[indice].id = "";
            }
          }

          identificadorDeHino(p);
        }
      }
    });
  }
}

function proximo() {
  controladorMusica++;
  tocandoHino();
}

function voltar() {
  controladorMusica--;
  tocandoHino();
}

function mudarVolume(volume) {
  try {
    let audio = document.querySelector("#tocando");
    audio.volume = volume;
  } catch (error) {
    abrirModal();
  }
}

function tocandoHino() {
  if (controladorMusica == time.length) {
    //possivel erro
    controladorMusica = 19;
  }

  if (controladorMusica == -1) {
    //possivel erro
    controladorMusica = 0;
  }

  audio.setAttribute("src", time[controladorMusica].hino);
  audio.autoplay = true;
  audio.id = "tocando";
  img.setAttribute("src", time[controladorMusica].escudo);
  h2.innerHTML = time[controladorMusica].nome;
  infoP.innerHTML = `<span class="compositor">Compositor</span>: ${time[controladorMusica].compositor}`;
  audio.preload = "metadata";

  info.appendChild(audio);
  info.appendChild(img);
  nomeComp.appendChild(h2);
  nomeComp.appendChild(infoP);

  progressoVolume();
}

function abrirFecharTabela() {
  // Responsividade
  listaTitulo.className = "tituloResposivo";

  if (burger.id == "fechado") {
    lista.style.display = "block";
    burger.id = "aberto";
    caixa.style.display = "none";
  } else {
    caixa.style.display = "block";
    lista.style.display = "none";
    burger.id = "fechado";
  }
}

function criandoVolumeProgress() {
  progressoBar.className = "progresso_bar";
  progresso.className = "progresso";
  nomeComp.appendChild(progressoBar);
  progressoBar.appendChild(progresso);
}

function progressoVolume() {
  let song = document.getElementById("tocando");
  song.ontimeupdate = function (e) {
    progresso.style.width =
      Math.floor((100 * song.currentTime) / song.duration) + "%";
  };

  progressoBar.onclick = function (e) {
    song.currentTime = (e.offsetX / progressoBar.offsetWidth) * song.duration;
  };

  criandoVolumeProgress();
}

function identificadorDeHino(p) {
  tocandoHino();
  criandoVolumeProgress();

  p.id = "estilo";
  icone[3].className = "fas fa-play";

  if (window.screen.width < 800) {
    // Responsividade
    flex.style.border = "none";
  } else {
    flex.style.border = "1px solid #505050";
    flex.style.borderRadius = "26px";
  }
}

function playPause() {
  try {
    let audio = document.getElementById("tocando");

    audio.paused ? audio.play() : audio.pause();

    if (!audio.paused) {
      icone[3].className = "fas fa-play";
    } else {
      icone[3].className = "fas fa-pause";
    }
  } catch (error) {
    abrirModal();
  }
}

const abrirModal = () => (ModalErro.style.display = "block");
const fecharModal = () => (ModalErro.style.display = "none");
