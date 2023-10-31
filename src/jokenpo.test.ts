import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { Jokenpo } from "./jokenpo";

describe("Jokenpo tests", function () {
  // Pedra empata com Pedra
  test("Stone + Stone = ➖", () => {
    const resultado = Jokenpo("Pedra", "Pedra");
    assert.strictEqual(resultado, "EMPATOU");
  });
});
