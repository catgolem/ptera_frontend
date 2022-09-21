import React from 'react'
import styled from 'styled-components'
import { POSTS } from '../pages/user'


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

  url
    リンクに飛べるように


#f4c530,#f39abb,#e73245,#4169e2,#00a692
*/}

const PostItems = () => {
  return(
  <div>
    {POSTS.map((post) =>{
      return(
        <PostVisual className='rounded mb-6 pt-3 pb-4 ' key={post.number}>
      
          <Work>
            「{post.work}」
          </Work>
          <Thought className='rounded'>
            {post.thought}
          </Thought>
          <URL className='rounded'>
            {post.url}
          </URL>
          <Point className='rounded'>
            {post.point}
          </Point>
        </PostVisual>
      )
    })}
  </div>
  )}

export default PostItems

const PostVisual = styled.div`
  width: auto;
  background-color: #fff0c3;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.6);
`

const Work = styled.div`
  font-weight: bold;
`

const Thought = styled.div`
  border:1px solid #4169e2;
  padding-left: 5px;
  height: 100px;
  margin: auto 10px;
`

const URL = styled.div`
  margin: 8px 10px;
  color: gray;
  text-decoration: underline;
`

const Point = styled.div`
  border: 1px solid #00a692;
  width: 5vw;
  text-align: center;
  background-color: white;
  margin-left: 10px;
`
