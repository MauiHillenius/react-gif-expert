import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"



describe('Pruebas en <AddCategory />', () => {

    test('Debe cambiar el valor en la caja de texto', () => {

        render(<AddCategory onNewCategory ={ () => {} } />);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, {target: { value: 'Hello Kitty' } });

        expect(input.value).toBe('Hello Kitty');
        

    });

    test('Debe llamar onNewCategory cunado el textbox tenga un valor', () => {

        const inputValue = 'Hello Kitty'
        const onNewCategoryMock = jest.fn()
        
        render(<AddCategory onNewCategory ={ onNewCategoryMock } />);

        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        

        fireEvent.input( input, { target: {value: inputValue } } );
        fireEvent.submit( form );
        
        expect(input.value).toBe('');

        expect(onNewCategoryMock).toHaveBeenCalled();
        expect(onNewCategoryMock).toHaveBeenCalledTimes(1);
        expect(onNewCategoryMock).toHaveBeenCalledWith( inputValue );

    });

    test('No debe llamar onNewCategory cunado el textbox no tenga ningún valor', () => {

        
        const onNewCategoryMock = jest.fn()
        
        render(<AddCategory onNewCategory ={ onNewCategoryMock } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        
        fireEvent.submit(form);
        expect(onNewCategoryMock).toHaveBeenCalledTimes(0);
        // expect(onNewCategoryMock).not.toHaveBeenCalled();

    });


})