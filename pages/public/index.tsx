import React from 'react'
import styled from 'styled-components'

{/*
ヘッダー
    ユーザーネーム
    ログアウトボタン
    ログインボタン
BG
    横の背景
センター
    投稿  map関数
    PostItemコンポーネントを入れる

モーダル
定義して  API
*/}

type postdata = {
  username: string
  text: string
}

const User = () => {
  return (
    <div>
      
      <BG>
        <Center>
          
        </Center>
        <ModalButton>

        </ModalButton>
      </BG>


    </div>
  )
}

export default User

const Center = styled.div`
  
`

const BG = styled.div`
  
`

const ModalButton = styled.div`
  
`