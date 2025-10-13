import { describe, expect, it } from "vitest";
import { addition } from "./math";


describe('addition()', () => {
    // cas standard
    it("retourne la somme de deux nombres positifs", () => {
        expect(addition(2,3)).toBe(5)
    })
    // cas avec un nombre negatif
    it("gestion nombres negatifs", () => {
        expect(addition(-4,10)).toBe(6)
    })
    // cas d'erreur
    it("leve une erreur si un des arguments n'est pas un nombre",() => {
        expect(() => addition('a',5)).toThrow("Les deux arguments doivent etre des nombres")
    })
})