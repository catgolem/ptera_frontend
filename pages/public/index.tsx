import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostItems from '../../components/PostItems'
import { PostModals } from '../../components/PostModals'



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
    thought: 'hoge',
    point: 72,
    url: 'https://sample3',
    work: 'fuga',
  },
  {
    number: 2,
    thought: '黄猿に惚れた// まさかこの私が、光の速さで惚れさせられるなんて！',
    point: 0,
    url: 'https://Φne-piece.com',
    work: 'ΦNE PIECE FILM RED',
  },
  {
    number: 3,
    thought: '白石まいやん、ありがとうございました。',
    point: 46,
    url: '',
    work: 'iPadを落としただけなのに',
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
    <div>
      
      <BG>
        
        <Center>
          
          <PostItems />
          
        </Center>
        <ShareButton>
          <Img src="/share_button.svg" />
        </ShareButton>

        
      </BG>
      
    </div>
  )
}

const Center = styled.div`
  background-color:#f4c530;
  width: 70vw; /* 好きな幅 */
  max-width: 100%;
  margin: 0 auto;
  padding: 24px;
  min-height: 100vh;
  box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.6) inset;
`

const BG = styled.div`
  background-color: #f78404;
  background-image:
    radial-gradient(#fb9d14 20%, transparent 20%),
    radial-gradient(#fb9d14 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  min-height: 100vh;
`


const ShareButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0daa1;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.6);
  border-radius: 100px;
`

const Img = styled.img`
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 45px;
  height: 45px;
`


export default User

