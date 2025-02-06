import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");



describe('Pruebas en GifGrid', () => {

    const category = 'Hello Kitty'

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue( {
            images: [],
            isLoading: true
        })
        
        render( <GifGrid category = { category } />);       

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText( category ));

    })

    test('Debe mostrar items cuando se cargan las imágenes de useFetchGifs ', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Hello Kitty',
                url: 'https://localhost.hellokitty.jpg'
            },
            {
                id: 'DEF',
                title: 'My Melody',
                url: 'https://localhost.mymelody.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue( {
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category = { category } />);
        expect(screen.getAllByRole('img').length).toBe(2);


    })
})

