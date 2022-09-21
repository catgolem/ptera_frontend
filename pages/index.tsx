import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Home:NextPage = () => {
  return (
    <div>
      <Head>
        <title>PTERA</title>
      </Head>
      <Block className='p-0'>
        <Message className='pt-10'>
          PTERA
        </Message>
      
        <Icons className='pt-10'>

          <InputButton>
            <Link href="/.auth/login/google?post_login_redirect_uri=https://proud-field-0aee10e00.1.azurestaticapps.net/user ">
              <a>
                <Img src="/google_icon.svg" />
              </a>
            </Link>
          </InputButton>

          <InputButton>
            <Link href="/.auth/login/twitter?post_login_redirect_uri=https://proud-field-0aee10e00.1.azurestaticapps.net/user ">
              <a>
                <Img src="/twitter_icon.svg" />
              </a>
            </Link>
          </InputButton>

          <InputButton>
            <Link href="/.auth/login/Azure?post_login_redirect_uri=https://proud-field-0aee10e00.1.azurestaticapps.net/user ">
              <a>
                <Img src="/azure_icon.svg" />
              </a>
            </Link>
          </InputButton>
        </Icons>
      </Block>
  </div>
  )
}



export default Home

const Block = styled.div`
  display:flex;
  flex-flow: column;
  
`
const Message = styled.div`
  text-align: center;
  font-size: 45px;
  vertical-align: middle;
`

const InputButton = styled.button`
  padding: 10px;

`


const Img = styled.img`
  width:50px;

`


const Icons = styled.div`
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    margin: auto;
`
{/*
  Linkの2つをAzureのページに飛ぶようにする
  デザイン

  ボタンを複数個つくってアカウントのログインの仕方を選べるようにする
  
  Azure
  twitter
  github
*/}