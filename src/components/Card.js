
import React from 'react'

const Card = ({image, images, cardStyle, innerStyle, clickFunc}) => {
  return (
    <div className={cardStyle} onClick={clickFunc}>
        <div className={innerStyle}>
            <img src= {images[image]} alt='' className='img'/>
        </div>
    </div>
  )
}

export default Card

export const createCards = (images, clickFunc, pickedCards) => {
    let cardArray = [];
    let imageArr = Object.keys(images);
    for(let i = 0; i < 10; ++i){
        let imageIndex = Math.floor(Math.random() * imageArr.length);
        let image = imageArr[imageIndex];
        cardArray.push(
        <Card key={i} image={image} images={images} 
            cardSt1yle={'card'} innerStyle={'inner-card'} 
            clickFunc={clickFunc}
        />);
        imageArr.splice(imageIndex, 1);
    }
    return cardArray;
}
