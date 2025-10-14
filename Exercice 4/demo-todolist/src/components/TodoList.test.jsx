import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { TodoList } from "./TodoList"

describe("TodoList(integration)", () => {
    test("ajoutes 2 taches et suprimme la premiere", async() => {

    render(<TodoList />)

    // debut avec aucune todo
    expect(screen.getByText(/aucune tâche/i)).toBeInTheDocument()

    const input = screen.getByPlaceholderText(/nouvelle tâche/i)
    const button = screen.getByRole("button", {name : /ajouter/i})

    // ajout une tache
    await userEvent.type(input, "Acheter des bonbons")
    await userEvent.click(button)
    expect(screen.getByText("Acheter des bonbons")).toBeInTheDocument()

    // ajout d'une seconde tache
    await userEvent.type(input, "Poser des questions")
    await userEvent.click(button)
    expect(screen.getByText("Poser des questions")).toBeInTheDocument()

    // suppresion d'une tache
    const deleteButton = screen.getAllByRole("button",{ name: /supprimer/i})
    await userEvent.click(deleteButton[0])

    // verification que la premiere tache est supprimer
    expect(screen.queryByText("Acheter des bonbons")).not.toBeInTheDocument()

    // la seconde tache est encore presente
    expect(screen.getByText("Poser des questions")).toBeInTheDocument()
    })
    

})