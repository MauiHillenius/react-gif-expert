import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


const categories = ['Valorant'];

const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
};




describe('Pruebas en GifExpertApp', () => { 
    test('Debe agregar una categoría si no existe previamente', () => {
        
        render(< GifExpertApp/>);

        setCategories= jest.fn();
        
        onAddCategory('Hello Kitty');

        expect(setCategories).toHaveBeenCalledWith(['Hello Kitty', 'Valorant']);  

    });

    test('No debe agregar una categoría que ya exista', () => {

        render(< GifExpertApp/>);

        setCategories= jest.fn();

        onAddCategory('Valorant');

        expect(setCategories).not.toHaveBeenCalled();

    })

    
 }) 