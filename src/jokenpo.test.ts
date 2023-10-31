import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { Jokenpo } from "./jokenpo";

describe("Jokenpo tests: Empates", function () {
  // Pedra empata com Pedra
  test("Stone + Stone = ➖", () => {
    const resultado = Jokenpo("Pedra", "Pedra");
    assert.strictEqual(resultado, "EMPATOU");
  });

  // Tesoura empata com Tesoura
  test("Scissor + Scissor = ➖", () => {
    const resultado = Jokenpo("Tesoura", "Tesoura");
    assert.strictEqual(resultado, "EMPATOU");
  });

  // Papel empata com Papel
  test("Paper + Paper = ➖", () => {
    const resultado = Jokenpo("Papel", "Papel");
    assert.strictEqual(resultado, "EMPATOU");
  });
});

describe("Jokenpo tests: Ganhos", function () {
  // Pedra ganha de Tesoura
  test("Stone + Scissor = ✔️", () => {
    const resultado = Jokenpo("Pedra", "Tesoura");
    assert.strictEqual(resultado, "GANHOU");
  });

  // Tesoura ganha de Papel
  test("Scissor + Paper = ✔️", () => {
    const resultado = Jokenpo("Tesoura", "Papel");
    assert.strictEqual(resultado, "GANHOU");
  });

  // Papel ganha de Pedra
  test("Paper + Stone = ✔️", () => {
    const resultado = Jokenpo("Papel", "Pedra");
    assert.strictEqual(resultado, "GANHOU");
  });
});
