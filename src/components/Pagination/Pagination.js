import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({setPageNumber ,pageNumber }) {

    let next= ()=>{
        setPageNumber((x)=>x+1) 
    }

    let prev= ()=>{
        if (pageNumber === 1) return
        setPageNumber((x)=>x-1) 
    }

  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
        <button onClick={prev} className="btn btn-warning">Prev</button>
        <button onClick={next} className="btn btn-warning">Next</button>
    </div>
  )
}

export default Pagination