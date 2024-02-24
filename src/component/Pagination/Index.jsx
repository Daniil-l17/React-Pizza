import React from 'react'
import ReactPaginate from 'react-paginate'
const Pogitanion = ({onChangePage}) => {
  const setPAge = (i) => {
    onChangePage(i.selected + 1)
  }
  return (
    <ReactPaginate
    className='gang'
  breakLabel="..."
  nextLabel=">"
  onPageChange={(event) => setPAge(event)}
  pageRangeDisplayed={4}
  pageCount={3}
  previousLabel="<"
  renderOnZeroPageCount={null}
/>
  )
}

export default Pogitanion