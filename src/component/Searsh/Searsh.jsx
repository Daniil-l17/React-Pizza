import React, { useContext } from 'react'
import style from './Sersh.module.scss'
import { SershContext } from '../../Route/Router'
const Searsh = () => {
  const  { sersh,setsershValue } = useContext(SershContext)
  return (
    <div className='ddd'>
      <input value={sersh} onChange={(e) => setsershValue(e.target.value)} type="text" placeholder='Поиск пицци...' name="" id="" />
      {sersh && <img className='asascsacas' onClick={() => setsershValue('')} src="./4115230_cancel_close_delete_icon.svg" width={30} alt="" />}
    </div>
  )
}

export default Searsh