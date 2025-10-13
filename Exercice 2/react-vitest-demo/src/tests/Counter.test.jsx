import { render , screen} from "@testing-library/react";
import { describe, expect } from "vitest";
import userEvent from '@testing-library/user-event'
import Counter from "../components/Counter";

describe("Counter", () => {
    it("affcihe la valeur initiale à 0", () => {
        // rendu du composant
        render(<Counter />)
        expect(screen.getByText(/ValeuR : 0/i)).toBeInTheDocument()
    })

    it("incrementer la valeur au clic sur le boutton", async () => {
        render(<Counter />)
        const user = userEvent.setup()
        const button = screen.getByRole("button",{ name: /incrémenter/i})
        await user.click(button)
        expect(screen.getByText(/ValeuR : 1/i)).toBeInTheDocument()
    })
    it("incrementer plusieurs fois la valeur au clic sur le boutton", async () => {
        render(<Counter />)
        const user = userEvent.setup()
        const button = screen.getByRole("button",{ name: /incrémenter/i})
        await user.click(button)
        await user.click(button)
        expect(screen.getByText(/ValeuR : 2/i)).toBeInTheDocument()
    })
})