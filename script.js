/* =========================
   ESTRELLAS
========================= */

const stars =
  document.getElementById("stars");

for (let i = 0; i < 120; i++) {

  const star =
    document.createElement("div");

  star.className =
    "star";

  star.style.left =
    Math.random() * 100 + "%";

  star.style.top =
    Math.random() * 100 + "%";

  star.style.animationDelay =
    Math.random() * 3 + "s";

  stars.appendChild(star);

}


/* =========================
   CAMBIAR PANTALLA
========================= */

function showScreen(id) {

  const screens =
    document.querySelectorAll(".screen");

  screens.forEach(function(screen) {

    screen.classList.remove("active");

  });

  const target =
    document.getElementById(id);

  if (target) {

    target.classList.add("active");

    window.scrollTo(0, 0);

  }

}


/* =========================
   MAGIA
========================= */

function createMagic(x, y) {

  const container =
    document.getElementById("particles");

  for (let i = 0; i < 55; i++) {

    const particle =
      document.createElement("div");

    particle.className =
      "magic-particle";

    const startX =
      x || window.innerWidth / 2;

    const startY =
      y || window.innerHeight / 2;

    particle.style.left =
      startX + "px";

    particle.style.top =
      startY + "px";

    const moveX =
      (Math.random() - .5) * 350;

    const moveY =
      -50 - Math.random() * 250;

    particle.style.setProperty(
      "--moveX",
      moveX + "px"
    );

    particle.style.setProperty(
      "--moveY",
      moveY + "px"
    );

    particle.style.animationDelay =
      Math.random() * .3 + "s";

    container.appendChild(particle);

    setTimeout(function() {

      particle.remove();

    }, 1900);

  }

}


/* =========================
   INICIO
========================= */

const startBtn =
  document.getElementById("startBtn");

startBtn.addEventListener(
  "click",
  function() {

    createMagic(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    setTimeout(function() {

      showScreen(
        "envelopeScreen"
      );

    }, 500);

  }
);


/* =========================
   SELLO
========================= */

const sealBtn =
  document.getElementById("sealBtn");

const envelope =
  document.getElementById("envelope");

const waxSeal =
  document.getElementById("waxSeal");

const envelopeText =
  document.getElementById("envelopeText");

let letterOpened =
  false;


function openLetter() {

  if (letterOpened)
    return;

  letterOpened =
    true;


  /* Explosión */

  waxSeal.classList.add(
    "magic"
  );


  const rect =
    waxSeal.getBoundingClientRect();


  createMagic(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2
  );


  envelopeText.textContent =
    "La magia está a punto de comenzar... ✨";


  sealBtn.style.display =
    "none";


  setTimeout(function() {

    envelope.classList.add(
      "open"
    );

    createMagic(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

  }, 650);


  setTimeout(function() {

    showScreen(
      "letter"
    );

  }, 1800);

}


sealBtn.addEventListener(
  "click",
  openLetter
);


waxSeal.addEventListener(
  "click",
  openLetter
);


/* =========================
   CARTA → SOMBRERO
========================= */

const sortingBtn =
  document.getElementById(
    "sortingBtn"
  );

sortingBtn.addEventListener(
  "click",
  function() {

    showScreen(
      "sorting"
    );

  }
);


/* =========================
   SOMBRERO
========================= */

const sortBtn =
  document.getElementById(
    "sortBtn"
  );

const sortingText =
  document.getElementById(
    "sortingText"
  );

const house =
  document.getElementById(
    "house"
  );

const houseMessage =
  document.getElementById(
    "houseMessage"
  );

const secretBtn =
  document.getElementById(
    "secretBtn"
  );

const finalBtn =
  document.getElementById(
    "finalBtn"
  );


let sortingStarted =
  false;


sortBtn.addEventListener(
  "click",
  function() {

    if (sortingStarted)
      return;

    sortingStarted =
      true;

    sortBtn.disabled =
      true;

    sortBtn.style.display =
      "none";


    const phrases = [

      "Hmm... interesante...",

      "Veo curiosidad...",

      "Veo creatividad...",

      "Una mente que nunca deja de descubrir...",

      "Hay algo especial aquí...",

      "Ya lo tengo..."

    ];


    let index =
      0;


    const interval =
      setInterval(
        function() {

          sortingText.textContent =
            phrases[index];

          index++;


          if (
            index >=
            phrases.length
          ) {

            clearInterval(
              interval
            );


            setTimeout(
              function() {

                createMagic(
                  window.innerWidth / 2,
                  window.innerHeight / 2
                );


                house.textContent =
                  "RAVENCLAW 🦅";

                house.classList.add(
                  "show"
                );


                houseMessage.style.display =
                  "block";


                secretBtn.classList.remove(
                  "hidden"
                );


              },
              700
            );

          }

        },
        750
      );

  }
);


/* =========================
   MENSAJE SECRETO
========================= */

secretBtn.addEventListener(
  "click",
  function() {

    createMagic(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    setTimeout(
      function() {

        showScreen(
          "secret"
        );

      },
      450
    );

  }
);


/* =========================
   CONTINUAR AL FINAL
========================= */

const secretContinue =
  document.getElementById(
    "secretContinue"
  );


secretContinue.addEventListener(
  "click",
  function() {

    createMagic(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

    setTimeout(
      function() {

        showScreen(
          "final"
        );

      },
      450
    );

  }
);


/* =========================
   ESCUDO SECRETO
========================= */

const crest =
  document.getElementById(
    "crest"
  );

let crestClicks =
  0;

crest.addEventListener(
  "click",
  function() {

    crestClicks++;

    createMagic(
      window.innerWidth / 2,
      window.innerHeight / 2
    );


    if (crestClicks >= 3) {

      alert(
        "✨ La magia siempre encuentra su camino. 🦅"
      );

      crestClicks =
        0;

    }

  }
);


/* =========================
   SONIDO
========================= */

const soundBtn =
  document.getElementById(
    "soundBtn"
  );

const bgMusic =
  document.getElementById(
    "bgMusic"
  );

let musicPlaying =
  false;


soundBtn.addEventListener(
  "click",
  function() {

    /*
      El navegador no permite
      reproducir audio automáticamente.

      Cuando agregues un MP3 al
      elemento <audio>, este botón
      podrá encenderlo/apagarlo.
    */

    if (!bgMusic.src) {

      soundBtn.textContent =
        "🔇";

      setTimeout(
        function() {

          soundBtn.textContent =
            "🔊";

        },
        900
      );

      return;

    }


    if (!musicPlaying) {

      bgMusic.volume =
        0.35;

      bgMusic.play();

      musicPlaying =
        true;

      soundBtn.textContent =
        "🔊";

    } else {

      bgMusic.pause();

      musicPlaying =
        false;

      soundBtn.textContent =
        "🔇";

    }

  }
);
