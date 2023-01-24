
import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../styles/main.css'
const Main = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setCards(createCards());
    }, []);
  return (
    <div className='main'>
        {cards}
    </div>
  )
}

const createCards = () => {
    let cardArray = [];
    console.log('creating');
    for(let i = 0; i < 10; ++i){
        let cardSelected = Math.floor(Math.random() * 10);
        console.log(cardSelected);
        cardArray.push(<Card cardStyle={'card'} innerStyle={'inner-card'} />);
    }
    return cardArray;
}


export default Main