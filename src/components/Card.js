
import React from 'react'

const Card = ({name, src,clickFunc}) => {
  return (
    <div className={'card'} onClick={()=>{clickFunc(src)}}>
        <img src= {src} alt='' className='img'/>
        <p className='name'>{name.replace('-', ' ')}</p>
    </div>
  )
}

export default Card

export const createCards = (images, clickFunc) => {
    let cardArray = [];
    let imageArr = Object.keys(images);
    for(let i = 0; i < 10; ++i){
        let imageIndex = Math.floor(Math.random() * imageArr.length);
        let name = imageArr[imageIndex];
        cardArray.push(
        <Card key={i} name={name} src={images[name]} clickFunc={clickFunc}
        />);
        imageArr.splice(imageIndex, 1);
    }
    return cardArray;
}

