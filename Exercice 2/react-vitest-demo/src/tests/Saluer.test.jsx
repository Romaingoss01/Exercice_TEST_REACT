import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Saluer from "../components/Saluer";


describe("Saluer",() => {
    it("affciher le texte avec le nom fourni", () => {
        render(<Saluer name="Toto"/>)
        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Hello Toto')

    })
    it("affciher le texte avec aucun nom fourni", () => {
        render(<Saluer />)
        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Hello World')

    })
})