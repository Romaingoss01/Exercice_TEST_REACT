import { describe, expect, it } from "vitest";
import { capitalize } from "./capitalize";

describe('capitalize()', () => {
    // cas standard
    it("renvoie la chaine de caratères avec le 1er élément en maj", () => {
        expect(capitalize("bonjour")).toBe("Bonjour")
    })
    // cas avec des majuscules dans le mot
    it("renvoie la chaine de caratères avec des maj avec le 1er élément en maj", () => {
        expect(capitalize("rEact")).toBe("REact")
    })
    // cas d'erreur
    it("leve une erreur si la chaine de caractère commence par un chiffre",() => {
        expect(() => capitalize("123")).toThrow("la chaine ne doit pas commencer par un chiffre")
    })
})