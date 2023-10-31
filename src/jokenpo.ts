/**
 * Maria Gabriela Garcia dos Santos Reis
 * 6º DSM / 2023
 *
 * Desafio: Jokenpo (https://dojopuzzles.com/problems/jokenpo/)
 */

type Jokenpo_Options = "Pedra" | "Tesoura" | "Papel";
type Jokenpo_Result = "EMPATOU" | "GANHOU" | "PERDEU";

export function Jokenpo(
  player1: Jokenpo_Options,
  player2: Jokenpo_Options,
): Jokenpo_Result {
  if (player1 === player2) return "EMPATOU";

  if (
    (player1 === "Pedra" && player2 === "Tesoura") ||
    (player1 === "Tesoura" && player2 === "Papel") ||
    (player1 === "Papel" && player2 === "Pedra")
  )
    return "GANHOU";

  return "PERDEU";
}
