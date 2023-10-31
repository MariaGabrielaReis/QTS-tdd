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
