import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
{/* import axios from "axios" */}


type postdata = {
  email: string
  password: string
}
{/* 関数を渡って使えるようにグローバルで宣言 */}

const Signup = () => {

  const [postData, setPostData] = useState<postdata>({
    email: '',
    password: '',
  })

  return (
    <div>
      <main>
        <h1>ログイン</h1>
        <div>
          <div>

            <div>メールアドレス</div>
            <InputForm
                name="email"
                type="email"
                onChange = {(e) =>
                  setPostData({
                    ...postData,
                    email: e.target.value
                  })
                }
              />


            <div>パスワード</div>
            <InputForm
                name="password"
                type="password"
                onChange = {(e) =>
                  setPostData({
                    ...postData,
                    password: e.target.value
                  })
                }
              />

          </div>
          <InputButton onClick={() =>{
            console.log({postData})
            }
            }>
            ログイン
          </InputButton>
        </div>
        新規登録は
        <Link href="/Signup">
            <a>こちら</a>
        </Link>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Signup

const InputForm = styled.input`
  font-size: 14px;
`

const InputButton = styled.button`
  
`


{/*

  import { useState, FC } from 'react'

type temp = {
  email: string
  password: string
}

const Test: FC = () => {

  const [postData, setPostData] = useState<temp>({
    email: '',
    password: '',
  })

  setPostData({
    ...postData,
    password:'test@test'
})

}

API => 処理できないけどとりあえず書いておく
デザイン

*/}


{/*
  どこまでフロントでやるべき？
    ◎入力したら値が変わる部分まで
    ✕定義するだけ
*/}


{/*
  onClickの中は関数、console.logは関数でないからアロー関数などで処理を書く
*/}