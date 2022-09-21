import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostItems from '../../components/PostItems'
import { PostModals } from '../../components/PostModals'
import { useRecoilState } from 'recoil'
import { atom } from 'recoil'


{/*
ヘッダー
    ユーザーネーム
    ログアウトボタン
    ログインボタン

モーダル
定義して  API

onclickすると移動する関数
(setISShowが移動先
isshowもってく
移動先でisshow変更


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

export const postModalsState = atom({
  key: 'postModalsState',
  default: false
})

const User:NextPage = () => {

  const [isShow, setISShow] = useRecoilState<boolean>(postModalsState)

  const clickHandler = () => {
    console.log(isShow)
    setISShow(true)
    /* 関数には代入する値を書く */
  }
  
  return (
    <div>
      
      <BG>
        
        <Center>
          
          <PostItems />
          
        </Center>
        <ShareButton>
          <Img src="/share_button.svg" />
        </ShareButton>
        <ModalButton onClick={clickHandler}>
          <Img src="/plus_button.svg" />

        </ModalButton>

        <PostModals />
        {/*
          ・左がこの先引数として使われるprops、右がこれまで引数として使われてきた変数でpropsとなるもの
          ・コンポーネント自体は毎度呼び出される。

          ・useStateで毎度値が切り替わることで判断する

          console.logでどこまで合っているか確認
            開発者ツールは、console,カーソルを指す機能,レスポンシブ対応などで使う

        */}

        
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

const ModalButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0daa1;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.6);
  border-radius: 100px;
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

