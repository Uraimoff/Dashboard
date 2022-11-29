import React from 'react'
import './style.css'

const Box = ({child, background}) => {
  return (
    <>
    <div className='box' style={{background: `${background}`}}>
        {child}
    </div>
    </>
  )
}

export default Box