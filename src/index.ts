import askUser from "./askUser.js";

console.log(
  "¡Hola usuario! este es un programa que almacena una lista de títulos de canciones:"
);

const songTitles = [
  "LISTA DE CANCIONES:",
  "Bohemian Rhapsody",
  "Imagine",
  "Hotel California",
  "Stairway to Heaven",
  "Smells Like Teen Spirit",
  "Shape of You",
  "Rolling in the Deep",
  "Blinding Lights",
];
const askSongsToUser = askUser(
  `Dime que canción quieres visualizar, para ello debes indicarme un número del 1 al ${
    songTitles.length - 1
  }: `
);
const askSongsToUserToNumber = +askSongsToUser;

if (
  askSongsToUserToNumber === 0 ||
  askSongsToUserToNumber >= songTitles.length
) {
  console.log("La posición indicada NO es correcta.");
} else {
  console.log(
    `La canción que corresponde a la posición mencionada es: ${songTitles[askSongsToUserToNumber]}`
  );
}
