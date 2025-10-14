import { describe, expect } from "vitest";
import { render , screen} from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import userEvent from '@testing-library/user-event'

describe("LoginForm", () => {
    test("soumet les informations saisies du formulaire et apelle de onLogin avec les valeurs", async () => {
        const handleLogin = vi.fn()
        render(<LoginForm onLogin={handleLogin} />)

        const emailInput = screen.getByPlaceholderText(/entrez votre email/i)
        const passwordInput = screen.getByPlaceholderText(/entrez votre mot de passe/i)
        const submitButton = screen.getByRole('button', {name: /connecter/i})

        await userEvent.type(emailInput, "toto@tata.com")
        await userEvent.type(passwordInput,"1234")
        await userEvent.click(submitButton)

        // simuler l'appui sutr la touche tab
        //await userEvent.tab()

        // remplir le champ password et appuie sur la touche entree
        //await userEvent.type(passwordInput,"1234{enter}")

       // expect(submitButton).toBeEnabled()
       // expect(submitButton).toBeDisabled()
        expect(handleLogin).toHaveBeenCalledTimes(1)
        expect(handleLogin).toHaveBeenCalledWith({
            email : 'toto@tata.com',
            password : '1234'
        })
    })

    test("ne soumet pas si un champs est vide ", async () => {
          const handleLogin = vi.fn()
          render(<LoginForm onLogin={handleLogin} />)

          const emailInput = screen.getByLabelText(/email/i)
          const submitButton = screen.getByRole('button', {name: /connecter/i})

          await userEvent.type(emailInput, "tutu@titi.com")
          await userEvent.click(submitButton)

          expect(handleLogin).not.toHaveBeenCalled()
    })
})