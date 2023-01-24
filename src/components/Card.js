
import React from 'react'

const Card = ({cardStyle, innerStyle}) => {
  return (
    <div className={cardStyle}>
        <div className={innerStyle}>Card</div>
    </div>
  )
}

export default Card