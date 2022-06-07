import React from 'react';
import "./Product.css"

const Pagination = ({postPerPage , totalPost , paginate}) => {

    const pageNumber = [];

    for(var i=1 ; i<=Math.ceil(totalPost/postPerPage) ; i++){
        pageNumber.push(i);
    }





  return (
    <div className='pages'>
        <div className='pagination'>
            {pageNumber.map((num) => (
                <h3 key={num}>
                 <a onClick={()=> paginate(num)} href="!#">
                     {num}
                 </a>

                </h3>
            ))}

        </div>
    </div>
  )
}

export default Pagination