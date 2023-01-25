
import React, { useEffect, useMemo, useState } from 'react'
import {createCards} from './Card'


const Main = ({incrementScore,toggleGameOver, gameOver}) => {
    /**setCards doesn't create a new list of cards, it
    * instead updates the cards with the new values from createCards.
    * Think of components as html. if the old value was 
    * <div class="someClass">Text</div>
    * and the new value is
    * <div class="someClass">New Text</div>
    * why create a whole new div, react sees this and instead updates the old div
    * to contain the new values
    */
    let pickedCards = new Set(); //doesnt affect render so don't use state

    const [cards, setCards] = useState([]);
    const images = useMemo(()=>{
        let result = {};
        function importAll(context){
            context.keys().forEach((key)=>{
                result[key.replace('./','').replace('.jpg', '')] = context(key);
            });
            return result;
        }
        return importAll(require.context('../assets/imgs', false, /\.jpg/));
    }, []);

    useEffect(() => {
        if(!gameOver)
            setCards(createCards(images, clickFunc));
        
    }, [gameOver, images]);

    const clickFunc = (src)=>{
        if(pickedCards.has(src)){
            toggleGameOver(true);
            pickedCards.clear();   
        }
        else{
            pickedCards.add(src);
            setCards(createCards(images, clickFunc));
            incrementScore();
        }
    }

  return (
    <div className='main'>
        {cards}
    </div>
  )
}


export default Main