
import React, { useEffect, useMemo, useState } from 'react'
import Card,  {createCards} from './Card'
import '../styles/main.css'
const Main = () => {
    const [cards, setCards] = useState([]);
    let pickedCards = new Set(); //doesnt affect render so don't use state
    const images = useMemo(()=>{
        let result = {};
        function importAll(context){
            context.keys().map((key)=>{
                result[key.replace('./','')] = context(key);
            });
            return result;
        }
        return importAll(require.context('../imgs', false, /\.jpg/));
    }, []);
    useEffect(() => {
        console.log('init cards');
        setCards(createCards(images, handleSetCards, pickedCards));
        
    }, []);
    const handleSetCards=() =>{
        setCards(createCards(images, handleSetCards, pickedCards))
    }
  return (
    <div className='main'>
        {cards}
    </div>
  )
}


export default Main