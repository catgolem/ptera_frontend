import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type postdata = {
  username: string
  email: string
  password: string
}

const Signup = () => {

  const [postData, setPostData] = useState<postdata>({
    username: '',
    email: '',
    password: '',
  })
  
  return (
    <div>

      <main>
        <h1>新規登録</h1>
        <div>
          <div>

            <div>ユーザー名</div>
              <InputForm
                name="username"
                type="text"
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    username: e.target.value
                  })
                }
              />
            <div>メールアドレス</div>
              <InputForm
                name="email"
                type="email"
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    username: e.target.value
                  })
                }
              />
            <div>パスワード</div>
              <InputForm
                name="password"
                type="password"
                onChange={(e) =>
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
            新規登録
          </InputButton>
        </div>
        ログインは
        <Link href="/Login">
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

`

const InputButton = styled.button`
  
`


{/*
  API
  デザイン
*/}
