import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import PostItem from '../../components/PostItem'

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
          
          <PostItem />
          
        </Center>
        <ModalButton>
          
        </ModalButton>
        
      </BG>
      
    </Full>
  )
}

const Center = styled.div`
  background-color: white;
`

const BG = styled.div`
  background-color: orange;

`

const ModalButton = styled.div`
  
`

const Full = styled.div`
  
`

export default User

