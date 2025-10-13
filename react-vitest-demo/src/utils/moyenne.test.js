import { describe, expect, it } from "vitest";
import { moyenne } from "./moyenne";

describe('moyenne()', () => {
    // cas standard
    it("retourne la moyenne", () => {
        expect(moyenne([10, 20, 30])).toBe(20)
    })
    // cas avec un element
    it("gestion avec 1 element", () => {
        expect(moyenne([5])).toBe(5)
    })
    // cas d'erreur
    it("leve une erreur si le tableau est vide",() => {
        expect(() => moyenne([])).toThrow("le tableau ne doit pas être vide")
    })
})