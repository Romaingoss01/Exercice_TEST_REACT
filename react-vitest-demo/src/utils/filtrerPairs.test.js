import { describe, expect, it } from "vitest";
import { filtrerPairs } from "./filtrerPairs";

describe('filtrerPairs()', () => {
    // cas standard
    it("renvoie uniquement les nombres pairs dans un tableau ", () => {
        expect(filtrerPairs([1, 2, 3, 4, 5])).toBe([2,4])
    })
    // cas avec lettres dans le tableau
    it("renvoie uniquement les nombres pairs dans un tableau qui contient également des lettres", () => {
        expect(filtrerPairs([10, 'a', 15, 20])).toBe([10,20])
    })
})