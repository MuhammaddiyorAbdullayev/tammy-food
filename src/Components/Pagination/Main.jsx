import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { DishData } from '../../data'

import Posts from './Posts/Posts'
import Pagination from './Numbers/Numbers'

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  useEffect(() => {
    setPosts(DishData);
  }, [])

  // get current posts

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber)=> {
    setCurrentPage(pageNumber)
  };

  return (
    <>
      <Posts
      posts={currentPosts}
      />
      <Pagination
      postPerPage={postPerPage}
      totalPosts={posts.length}
      paginate={paginate}
      />
    </>
  )
}

export default Main