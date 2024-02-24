import React, { useState } from 'react'

const Catirories = ({value, onClickCatigora}) => {
  
  const cotirories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

  return (
    <div className="categories">
    <ul>
      {cotirories.map((el,index) =>
      <li onClick={() => onClickCatigora(index)} key={index} className={value === index ? 'active' : ''} >{el}</li>
      )}
    </ul>
  </div>
  )
}

export default Catirories