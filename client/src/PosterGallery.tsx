import React, {useState, useEffect} from 'react'
import PosterTile from './PosterTile'

import { Poster } from './dec';


function PosterGallery() {
    const [posterArray, setPosterArray] = useState<Array<Poster>>([])

    // Populate posterArray
    useEffect(() => {
        let newImageArray: Array<Poster> = [];
        for (let index = 0; index < 8; index++) {
        newImageArray.push({imageURL: 'http://placekitten.com/200/200'});
        }
        console.log(newImageArray)
        setPosterArray(newImageArray);  
        console.log(posterArray);
    },[])
    
    return(
        <div>
            <h3>Bestseller</h3>
            <div className="postersDiv">
                {
                posterArray.map((poster,i) => (
                    <PosterTile key={i} imageURL={poster.imageURL} />
                    ))
                }
            </div>
        </div>
    )
}

export default PosterGallery