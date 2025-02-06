import { useState } from 'react';
import { AddCategory, GifGrid } from './components' ;


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
    
  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]); 
    // tb se podria: setCategories( categories => [...categories, 'Valorant']);
  }

  return ( 
    <>
        
      <h1>GifExpertApp</h1>

      
      <AddCategory 
        onNewCategory={ (newCategory) => onAddCategory(newCategory)}
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
