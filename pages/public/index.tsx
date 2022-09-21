import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostItems from '../../components/PostItems'




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



const Public:NextPage = () => {
  
  return (
    <Full>
      
      <BG>
        
        <Center>
          
          <PostItems />
          
        </Center>
        <ShareButton>
          <Img src="/share_button.svg" />
        </ShareButton>
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

const ModalButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 5px #0023b7;
  border-radius: 100px;
`

const ShareButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 5px #0023b7;
  border-radius: 100px;
`

const Full = styled.div`

`

const Img = styled.img`
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 45px;
  height: 45px;


`


export default Public

