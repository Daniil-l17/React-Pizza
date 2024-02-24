import React, { useEffect, useState } from 'react'
import PizzaBlock from './PizzaBlock'
import Skeleton from './pizzaBlock/Skeleton'

const Pizza = ({page,cotegoria,sort,sersh}) => {
  const [item,setItems] = useState([])
  const [loading,setLoading] = useState(true)
  const sershst = sersh ? `&search=${sersh}` :  ''
  useEffect(() => {
    setLoading(true)
    fetch(`https://65182940582f58d62d357491.mockapi.io/item?page=${page}&limit=4&${cotegoria > 0 ? `category=${cotegoria}`: ''}&sortBy=${sort.sorts}&order=desc${sershst}`).then(res => {
      return res.json()
    }).then(json => {
        setItems(json)
        setLoading(false)
    });
    window.scroll(0,0)
  },[cotegoria,sort,sersh,page])

/* Обычная фильрации с помощью JavaScript =  filter(i => {
    if(i.title.toLowerCase().includes(sersh.toLowerCase())){
      return true
    }
    return false
  })*/

  const pizza = item.map((el,index) =>  <PizzaBlock key={index} el={el} />)
  const skeleton = [...new Array(9)].map((_,i) => <Skeleton key={i}/>)
  return (
    <div className="content__items">
      {
        loading ? skeleton : pizza
      }
  </div>
  )
}

export default Pizza