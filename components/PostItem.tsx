import React from 'react'
import styled from 'styled-components'
import { POSTS } from '../pages/User'

{/*

<PostItem />を入れる

user/index 定義 複数ある時 

map関数の使い方

{postItem.}
mapのときの並べるための番号どうする？

  const posts =[
    {
      thought: 'nice',
      point: 100,
      url: 'https://sample',
      work: 'frozen',
    },
    {
      thought: '感動した',
      point: 80,
      url: 'https://sample2',
      work: 'ワンピース',
    },
    {
      thought: 'hoge',
      point: 46,
      url: 'https://sample3',
      work: 'fuga',
    }

  ]

{postItem.thought}
{postItem.point}
{postItem.url}
{postItem.work}
*/}

const PostItem = () => {
  return(
  <PostVisual>
    {POSTS.map((post) =>{
      return(
        <div key={post.number}>
      
          <Work>
            {post.work}
          </Work>
          <Thought>
            {post.thought}
          </Thought>
          <URL>
            {post.url}
          </URL>
          <Point>
            {post.point}
          </Point>
        </div>
      )
    })}
  </PostVisual>
  )}

export default PostItem

const PostVisual = styled.div`
  
`

const Work = styled.div`
  
`

const Thought = styled.div`
  
`

const URL = styled.div`
  
`

const Point = styled.div`
  
`
