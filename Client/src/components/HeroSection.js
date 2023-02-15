import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = ({title}) => {
  const name={title}
  return (
    <>
    <div className='container-intro'>
        <div className='grid-two-column'>
            <div className='intro-data'>
                <p>Welcome to </p>  
                <h1 style={{fontSize:'40px'}}>{title.name}</h1>
                <p className='text' >An exciting place for the whole family to shop.Always ahead.Always in style!</p>
                    <button>
                        <NavLink to={'/products'} style={{textDecoration:'none',color:'white'}}>
                            Shop Now
                        </NavLink>
                    </button>

            </div>
            <div className='intro-img'>
                <img src="/shopping-image.jpg" alt="" width={{with:'150px'}}/>
            </div>
        </div>
    </div>
    </>
   
  )
}

export default HeroSection