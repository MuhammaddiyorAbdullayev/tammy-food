import React from 'react'
import {Container} from './style'

const Pagination = ({postPerPage,totalPosts,paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i)
    };

  return (
    <Container>
        {pageNumbers.map(number => (
            <button key={number} onClick={() => paginate(number)}>
                {number}
            </button>
        ))}
    </Container>
  )
}

export default Pagination