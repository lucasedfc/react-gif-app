import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {



    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     // setCategories(cat => [...categories, 'New data']);
    //     setCategories([...categories, 'New Category']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid
                            key={category}
                            category={category} />
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
