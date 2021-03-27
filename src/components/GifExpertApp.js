import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Evangelion']);

    // const handleAdd = () => {
    //     setCategories(cats => [...cats, 'Naruto']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( category =>
                        //  <li key={ category }> {category}</li>
                        <GifGrid 
                            key = { category } 
                            category = { category }/>
                    )
                }
            </ol>

        </>
    );
}

export default GifExpertApp