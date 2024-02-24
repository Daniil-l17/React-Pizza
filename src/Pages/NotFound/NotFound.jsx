import React from 'react'
  import styles from './notFound.module.scss'
const NotFound = () => {
  return (
    <div className={styles.root}>
        <h1>
      <span>😕</span>
      <br />
      Ничего не найдено
    </h1>  
    <p>К жасилению данная страница не доступна</p>
    </div>
  )
}

export default NotFound