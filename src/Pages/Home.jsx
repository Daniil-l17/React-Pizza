import React, { useState } from 'react'
import Catirories from '../component/Catirories'
import Cort from '../component/Cort'
import Pizza from '../component/Pizza'
import Pogitanion from '../component/Pagination/Index'
import { useSelector } from 'react-redux'

const Home = ({sersh}) => {
  //const [cotegoria,setcotigoria] = useState(0)
  const {counterD} = useSelector(state => state.counter.categoryID) 
  console.log(counterD)

  const setcotigoria = () => {}

  const [sort,setSort] = useState({name: 'популярности',sorts: 'rating'})
  const [page,setpage] = useState(1)
  return (
            <div className="container">
              <div className="content__top">
          <Catirories value={counterD} onClickCatigora={(i) => setcotigoria(i)} />
          <Cort  sort={sort} onClickSort={(i) => setSort(i)}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <Pizza page={page} sersh={sersh} sort={sort} cotegoria={counterD}/>
        <Pogitanion onChangePage={(numb) => setpage(numb)}/>
          </div>
          
  )
}

export default Home