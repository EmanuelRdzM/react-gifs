import React, { useEffect, useState } from 'react';
import Gif from "./Gif";
import getGifs from '../services/getGifs';

export default function ListOfGif({keyword}){

    const [gifs, setGifs] = useState([]);

    useEffect(function (){
        getGifs({keyword}).then(gifs => setGifs(gifs));
    }, [keyword]);

    return  gifs.map(({id, title, url}) => 
        <Gif
            key={id}
            title={title}
            url={url}
            id={id} 
        />
    )
}