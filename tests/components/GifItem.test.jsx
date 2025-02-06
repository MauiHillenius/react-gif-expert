import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas en <GifItem />', () => { 

    const title = 'Hello Kitty'
    const url = 'https://hello-kitty.com/hello-kitty.jpg'

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( container).toMatchSnapshot();
    });

    test('Debe mostrar el url y el alt indicados ', () => {
        render(<GifItem title={ title } url={ url } />);
        const {alt, src} = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(src).toBe(url);
    })

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText( title )).toBeTruthy();
    })
 })

 