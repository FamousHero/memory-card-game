
import React from 'react'

const Card = ({src, handleSetCards, pickedCards, incrementScore, resetScore}) => {
    const clickFunc = ()=>{
        console.log('generating new cards');
        if(pickedCards.has(src)){
            console.log('resetting');
            pickedCards.clear();
            resetScore();
            handleSetCards();
        }
        else{
            console.log('not in set...Continuing');
            pickedCards.add(src);
            handleSetCards();
            incrementScore();
        }
    }
  return (
    <div className={'card'} onClick={clickFunc}>
        <div className={'inner-card'}>
            <img src= {src} alt='' className='img'/>
        </div>
    </div>
  )
}

export default Card

export const createCards = (images, handleSetCards, pickedCards, incrementScore, resetScore) => {
    let cardArray = [];
    let imageArr = Object.keys(images);
    for(let i = 0; i < 10; ++i){
        let imageIndex = Math.floor(Math.random() * imageArr.length);
        let image = imageArr[imageIndex];
        cardArray.push(
        <Card key={i} src={images[image]} pickedCards={pickedCards} handleSetCards={handleSetCards}
            incrementScore={incrementScore} resetScore={resetScore}
        />);
        imageArr.splice(imageIndex, 1);
    }
    return cardArray;
}

