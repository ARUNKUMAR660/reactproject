import React from 'react'

import './background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'


const Background = ({playstatus,herocount}) => {
    if(playstatus){
  return (
    <>
      <video className='background' autoPlay muted loop>
        <source src={video1} type='video/mp4' />
      </video>
      <h1>hree</h1>
     </>
  )
}
else if(herocount===0){
    return <img src={image1} className='background' alt="" />
}
else if(herocount===1){
    return <img src={image2} className='background' alt="" />
}
else if(herocount===3){
    return <img src={image3} className='background' alt="" />
}

}

export default Background
