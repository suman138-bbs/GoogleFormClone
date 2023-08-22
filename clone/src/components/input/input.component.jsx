import React from 'react'

const Input = ({type,name,value,className}) => {
  return (
    <input type={type} name={name} value={value} className={className } />
  )
}

export default Input