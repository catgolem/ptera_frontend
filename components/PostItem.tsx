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

  url
    リンクに飛べるように


#f4c530,#f39abb,#e73245,#4169e2,#00a692
*/}

const PostItem = () => {
  return(
  <div>
    {POSTS.map((post) =>{
      return(
        <PostVisual key={post.number}>
      
          <Work>
            「{post.work}」
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
        </PostVisual>
      )
    })}
  </div>
  )}

export default PostItem

const PostVisual = styled.div`
  margin: 0.5em;
  padding: 0.5em;
  width: auto;
  background-color: #fff0c3;
`

const Work = styled.div`
  font-weight: bold;
`

const Thought = styled.div`
  border:1px solid #4169e2;
  padding-left: 5px;
  height: 100px;
`

const URL = styled.div`
  margin: 8px;
`

const Point = styled.div`
  border: 1px solid #00a692;
  width: 5vw;
  text-align: center;
  background-color: white;
`
