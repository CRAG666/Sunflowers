// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
   var lyricsData = [
      { text: "Él la estaba esperando con una flor amarilla", time: 1 },
      { text: "Ella lo estaba soñando con la luz en su pupila", time: 7 },
      { text: "Y el amarillo del sol, iluminaba la esquina", time: 14 },
      { text: "Lo sentía tan cercano, lo sentía desde niña", time: 21 },
      { text: "Ella sabía que él sabía", time: 28 },
      { text: "Que algún día pasaría", time: 32 },
      { text: "Que vendría a buscarla", time: 35 },
      { text: "Con sus flores amarillas", time: 39 },
      { text: "No te apures, no detengas", time: 46 },
      { text: "El instante del encuentro", time: 50 },
      { text: "Está dicho que es un hecho", time: 53 },
      { text: "No la pierdas, no hay derecho", time: 57 },
      { text: "No te olvides que la vida", time: 60 },
      { text: "Casi nunca está dormida", time: 64 },
      { text: "En ese bar tan desierto nos esperaba el encuentro", time: 70 },
      { text: "Ella llegó en limusina amarilla por supuesto", time: 77 },
      { text: "Él se acercó de repente la miro tan de frente", time: 84 },
      { text: "Toda una vida soñada y no pudo decir nada", time: 91 },
      { text: "Ella sabía que él sabía", time: 98 },
      { text: "Que algún día pasaría", time: 102 },
      { text: "Que vendría a buscarla", time: 105 },
      { text: "Con sus flores amarillas", time: 109 },
      { text: "No te apures, no detengas", time: 116 },
      { text: "El instante del encuentro", time: 120 },
      { text: "Está dicho que es un hecho", time: 123 },
      { text: "No la pierdas, no hay derecho", time: 127 },
      { text: "No te olvides que la vida", time: 130 },
      { text: "Casi nunca está dormida", time: 134 },
      { text: "Ella sabía que él sabía", time: 140 },
      { text: "Que algún día pasaría", time: 144 },
      { text: "Que vendría a buscarla", time: 147 },
      { text: "Con sus flores amarillas", time: 151 },
      { text: "No te apures, no detengas", time: 158 },
      { text: "El instante del encuentro", time: 162 },
      { text: "Está dicho que es un hecho", time: 165 },
      { text: "No la pierdas, no hay derecho", time: 169 },
      { text: "No te olvides que la vida", time: 172 },
      { text: "Casi nunca está dormida", time: 176 },
      { text: "Ella sabía que él sabía", time: 182 },
      { text: "Él sabía, ella sabía", time: 190 },
      { text: "Que él sabía, ella sabía", time: 194 },
      { text: "Y se olvidaron de sus flores amarillas", time: 200 }
    ];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
