import _ from "underscore";

/**
 *Esta funcion crea un nuevo deck
 * @param {Array<string>} tipos Ejemplo: ['C','D','H','S'];
 * @param {Array<string>} especiales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} regresa un muevo deck de cartas.
 */
export const crearDeck = (tipos, especiales) => {
  if (!tipos || tipos === 0)
    throw new Error("tipos es obligatorios como un arreglo de string");

  if (!especiales || especiales === 0)
    throw new Error("especiales es obligatorios como un arreglo de string");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  return _.shuffle(deck);
};
