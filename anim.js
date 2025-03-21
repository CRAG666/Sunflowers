// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
   var lyricsData = [
      { text: "Él la estaba esperando con una flor amarilla", time: 17 },
      { text: "Ella lo estaba soñando con la luz en su pupila", time: 25 },
      { text: "Y el amarillo del sol, iluminaba la esquina", time: 33 },
      { text: "Lo sentía tan cercano, lo sentía desde niña", time: 41 },
      { text: "Ella sabía que él sabía", time: 47 },
      { text: "Que algún día pasaría", time: 50 },
      { text: "Que vendría a buscarla", time: 52 },
      { text: "Con sus flores amarillas", time: 54 },
      { text: "No te apures, no detengas", time: 60 },
      { text: "El instante del encuentro", time: 63 },
      { text: "Está dicho que es un hecho", time: 65 },
      { text: "No la pierdas, no hay derecho", time: 67 },
      { text: "No te olvides que la vida", time: 68 },
      { text: "Casi nunca está dormida", time: 72 },
      { text: "En ese bar tan desierto nos esperaba el encuentro", time: 94 },
      { text: "Ella llegó en limusina amarilla por supuesto", time: 101 },
      { text: "Él se acercó de repente la miro tan de frente", time: 110 },
      { text: "Toda una vida soñada y no pudo decir nada", time: 118 },
      { text: "Ella sabía que él sabía", time: 124 },
      { text: "Que algún día pasaría", time: 126 },
      { text: "Que vendría a buscarla", time: 129 },
      { text: "Con sus flores amarillas", time: 131 },
      { text: "No te apures, no detengas", time: 137 },
      { text: "El instante del encuentro", time: 139 },
      { text: "Está dicho que es un hecho", time: 141 },
      { text: "No la pierdas, no hay derecho", time: 143 },
      { text: "No te olvides que la vida", time: 145 },
      { text: "Casi nunca está dormida", time: 148 },
      { text: "Ella sabía que él sabía", time: 170 },
      { text: "Que algún día pasaría", time: 172 },
      { text: "Que vendría a buscarla", time: 174 },
      { text: "Con sus flores amarillas", time: 176 },
      { text: "No te apures, no detengas", time: 182 },
      { text: "El instante del encuentro", time: 184 },
      { text: "Está dicho que es un hecho", time: 186 },
      { text: "No la pierdas, no hay derecho", time: 188 },
      { text: "No te olvides que la vida", time: 190 },
      { text: "Casi nunca está dormida", time: 193 },
      { text: "Ella sabía que él sabía", time: 199 },
      { text: "Él sabía, ella sabía", time: 200 },
      { text: "Que él sabía, ella sabía", time: 204 },
      { text: "Y se olvidaron de sus flores amarillas", time: 207 }
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
