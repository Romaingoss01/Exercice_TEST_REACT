import { describe, expect, it } from "vitest";
import { isValidEmail } from "./isValidEmail";

describe('isValidEmail()', () => {
    // cas standard
    it("renvoie true si l'adresse est correct", () => {
        expect(isValidEmail("test@example.com")).toBe(true)
    })
    // cas faux
    it("renvoie false si l'adresse est incorrect", () => {
        expect(isValidEmail("invalid@")).toBe(false)
    })
})