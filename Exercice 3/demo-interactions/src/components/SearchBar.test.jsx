import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {

    test('Saisie + clic → onSearch appelé avec la requête trimée', async () => {
        const user = userEvent.setup();
        const onSearchMock = jest.fn();
        render(<SearchBar onSearch={onSearchMock} />);

        const input = screen.getByPlaceholderText(/Rechercher/i);
        const button = screen.getByRole('button', { name: /Rechercher/i });

        await user.type(input, '  test query  ');
        await user.click(button);

        expect(onSearchMock).toHaveBeenCalledTimes(1);
        expect(onSearchMock).toHaveBeenCalledWith('test query');
    });


    test('Saisie + touche Entrée → onSearch appelé avec la requête trimée', async () => {
        const user = userEvent.setup();
        const onSearchMock = jest.fn();
        render(<SearchBar onSearch={onSearchMock} />);

        const input = screen.getByPlaceholderText(/Rechercher/i);
        await user.type(input, '  hello world  ');
        await user.keyboard('{Enter}');
        
        expect(onSearchMock).toHaveBeenCalledTimes(1);
        expect(onSearchMock).toHaveBeenCalledWith('hello world');
    });

    test('Bouton désactivé si champ vide ou espaces', async () => {
        const user = userEvent.setup();
        const onSearchMock = jest.fn();

        render(<SearchBar onSearch={onSearchMock} />);
        const input = screen.getByPlaceholderText(/Rechercher/i);
        const button = screen.getByRole('button', { name: /Rechercher/i });
        
        expect(button).toBeDisabled();
        
        await user.type(input, '   ');
        
        expect(button).toBeDisabled();


        await user.clear(input);
        await user.type(input, 'query');
        expect(button).toBeEnabled();
    });



    test('Aucune recherche lancée si requête vide après trim', async () => {
        const user = userEvent.setup();
        const onSearchMock = jest.fn();

        render(<SearchBar onSearch={onSearchMock} />);
        const input = screen.getByPlaceholderText(/Rechercher/i);
        const button = screen.getByRole('button', { name: /Rechercher/i });

        await user.type(input, '   ');
        await user.click(button);

        expect(onSearchMock).not.toHaveBeenCalled();

        await user.clear(input);
        await user.keyboard('{Enter}');
        expect(onSearchMock).not.toHaveBeenCalled();
    });



    test('Navigation clavier : tabulation atteint input puis bouton', async () => {
        
        const user = userEvent.setup();

        render(<SearchBar onSearch={() => {}} />);
        const input = screen.getByPlaceholderText(/Rechercher/i);
        const button = screen.getByRole('button', { name: /Rechercher/i });

        expect(document.body).toHaveFocus();
        
        await user.tab();
        expect(input).toHaveFocus();

        await user.tab();
        expect(button).toHaveFocus();
    });
});