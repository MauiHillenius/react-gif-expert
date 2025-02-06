import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"



describe('Pruebas en el hook useFetchGifs', () => { 
    
    test('Debe retornsar el estado inicial ', () => {
        
        const {result} = renderHook( () => useFetchGifs('Hello Kitty'));
        const { images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    })

    test('Debe retornar un arreglo de imágenes y el isLoading en false', async() => {
        
        const {result} = renderHook( () => useFetchGifs('Hello Kitty'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })
 })