import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Greeting from "../components/Greeting";


describe("Greeting",() => {
    it("affiche le texte avec le nom fourni", () => {
        render(<Greeting name="React" />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Bonjour, React');
    });

    it("affiche le texte avec aucun nom fourni", () => {
        render(<Greeting />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Bonjour, invité');
    });
})