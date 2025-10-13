import { render , screen} from "@testing-library/react";
import { describe, expect } from "vitest";
import userEvent from '@testing-library/user-event'
import ToggleMessage from "../components/ToggleMessage";

describe("ToggleMessage", () => {
    it("Message caché de base", () => {
        // rendu du composant
        render(<ToggleMessage />)
        expect(screen.getByText(/Ceci est un message qui peut être affiché ou caché./i)).toBeInTheDocument()
    })

    it("affiche le message au click", async () => {
        render(<Counter />)
        const user = userEvent.setup()
        const button = screen.getByRole("button",{ name: /Afficher/i})
        await user.click(button)
        expect(screen.getByText(/ /i)).toBeInTheDocument()
    })
})