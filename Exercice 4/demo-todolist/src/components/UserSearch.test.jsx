import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { UserSearch } from "./UserSearch"

beforeEach(() => {
  jest.resetAllMocks()
})

describe("UserSearch", () => {
    test('champ et bouton sont visibles', () => {
        render(<UserSearch />)
        // Champ input
        expect(screen.getByLabelText(/Nom d'utilisateur/i)).toBeInTheDocument()

        // Bouton "Rechercher"
        const button = screen.getByRole('button', { name: /Rechercher/i })
        expect(button).toBeInTheDocument()

        // Rien d’autre ne doit s’afficher

        expect(screen.queryByText(/Chargement/i)).not.toBeInTheDocument()
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()
        expect(screen.queryByText(/Utilisateur/i)).toBeInTheDocument()
    })

    test('test après clique', async () => {

        const fakeuser = {name : "romain"}

        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(fakeUser),
            }))

        render(<UserSearch />)
        const input = screen.getByLabelText(/Nom d'utilisateur/i)
        const button = screen.getByRole('button', { name: /Rechercher/i })

        fireEvent.change(input, { target: { value: 'romain' } })
        fireEvent.click(button)
        
        expect(screen.getByText(/Chargement/i)).toBeInTheDocument()
        
        await waitFor(() => {
            expect(screen.queryByText(/Chargement/i)).not.toBeInTheDocument()
            expect(screen.getByText(/Utilisateur trouvé : romain/i)).toBeInTheDocument()
        })
    })

    test('Utilisateur Introuvable', async () =>{

        global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: false,
        }))

        render(<UserSearch />)

        const input = screen.getByLabelText(/Nom d'utilisateur/i)
        const button = screen.getByRole('button', { name: /Rechercher/i })

        fireEvent.change(input, { target: { value: 'unknown' } })
        fireEvent.click(button)

        expect(screen.getByText(/Chargement/i)).toBeInTheDocument()

        await waitFor(() =>{
            expect(screen.queryByText(/Chargement/i)).not.toBeInTheDocument()
            expect(screen.getByRole('alert')).toHaveTextContent('Utilisateur introuvable')
        })
    })

    
})