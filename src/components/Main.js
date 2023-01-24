
import React, { useEffect, useMemo, useState } from 'react'
import Card,  {createCards} from './Card'
import '../styles/main.css'
const Main = () => {
    const [cards, setCards] = useState([]);
    let pickedCards = new Set();
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
        setCards(createCards(images, onClick, pickedCards));
        
    }, []);
    const onClick = ()=>{
        console.log('generating new card set');
        setCards(createCards(images, onClick));
    }
  return (
    <div className='main'>
        {cards}
    </div>
  )
}


export default Main