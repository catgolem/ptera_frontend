import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Home:NextPage = () => {
  return (
    <div>
      <Head>
        <title>ptera </title>

      </Head>
      <div>
        
        <div>
          Welcome to ptera
        </div>
      </div>
      <div>
        <InputButton>
          <Link href="/.auth/login/github">
            <a>
              ログインする
            </a>
          </Link>
        </InputButton>

        <InputButton>
          <Link href="/Signup">
            <a>
              新規登録する
            </a>
          </Link>
        </InputButton>
      </div>
      

      <footer>
      </footer>
    </div>
  )
}



export default Home

const InputButton = styled.button`
  a {
    text-decoration: none;
  }
`

{/*
  Linkの2つをAzureのページに飛ぶようにする
  デザイン
*/}