import { useState } from 'react';
import { AddCategory, GifGrid } from './components' ;


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
    
  const onAddCategory = (newValue) => {

    if(categories.includes(newValue)) return;
    setCategories([newValue, ...categories]); 
    // tb se podria: setCategories( categories => [...categories, 'Valorant']);
  }

  return (
    <>
        
      <h1>GifExpertApp</h1>

      
      <AddCategory 
        onNewCategory={ (NewValue) => onAddCategory(NewValue)}
        //setCategories={ setCategories } 
      />
    
      {categories.map( category => (

        <GifGrid
        
          key={category}
          category={category} />

      ))}

    </>
    
  )
}
