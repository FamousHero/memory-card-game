
import React, { useEffect, useMemo, useState } from 'react'
import {createCards} from './Card'
import '../styles/main.css'
const Main = ({incrementScore,toggleGameOver}) => {
    const [cards, setCards] = useState([]);
    let pickedCards = new Set(); //doesnt affect render so don't use state
    const images = useMemo(()=>{
        let result = {};
        function importAll(context){
            context.keys().map((key)=>{
                result[key.replace('./','').replace('.jpg', '')] = context(key);
            });
            return result;
        }
        return importAll(require.context('../imgs', false, /\.jpg/));
    }, []);
    const clickFunc = (src)=>{
        if(pickedCards.has(src)){
            toggleGameOver(true);
            pickedCards.clear();   
        }
        else{
            pickedCards.add(src);
            handleSetCards();
            incrementScore();
        }
    }
    useEffect(() => {
        setCards(createCards(images, clickFunc));
        
    }, []);
    const handleSetCards=() =>{
        setCards(createCards(images, clickFunc))
    }
  return (
    <div className='main'>
        {cards}
    </div>
  )
}


export default Main