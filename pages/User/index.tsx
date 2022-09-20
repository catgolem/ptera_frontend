import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import PostItems from '../../components/PostItems'
import PostItem from '../../components/PostItems'

{/*
ヘッダー
    ユーザーネーム
    ログアウトボタン
    ログインボタン
BG
    横の背景
センター
    投稿  map関数
      作品
      感想
      点数
      URL

モーダル
定義して  API

#f78404
#f0daa1
#ee7804
#fb9d14
#f1d55f

#f4c530,#f39abb,#e73245,#4169e2,#00a692
*/}

type postdata = {
  number: number
  thought: string
  point: number
  url: string
  work: string
}

export const POSTS =[
  {
    number: 1,
    thought: 'nice',
    point: 100,
    url: 'https://sample',
    work: 'frozen',
  },
  {
    number: 2,
    thought: '感動した',
    point: 80,
    url: 'https://sample2',
    work: 'ワンピース',
  },
  {
    number: 3,
    thought: 'hoge',
    point: 46,
    url: 'https://sample3',
    work: 'fuga',
  }

]

const User:NextPage = () => {
  
  return (
    <Full>
      
      <BG>
        
        <Center>
          
          <PostItems />
          
        </Center>
        <ModalButton>
          
        </ModalButton>
        
      </BG>
      
    </Full>
  )
}

const Center = styled.div`
  background-color:#f4c530;
  width: 70vw; /* 好きな幅 */
  max-width: 100%;
  margin: 0 auto;
  padding: 24px;
  min-height: 100vh;
`

const BG = styled.div`
  background-color: #e73245;
  min-height: 100vh;

`

const ModalButton = styled.div`
  
`

const Full = styled.div`

`

export default User

