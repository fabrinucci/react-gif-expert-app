import { useState } from "react/cjs/react.development";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Spiderman']);

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                        key= {category}
                        category= {category}
                        />
                    )
                }
            </ol>

        </>
    )
}

