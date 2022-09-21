import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Home:NextPage = () => {
  return (
    <div>
      <Head>
        <title>僕たちのしゅみらぼ</title>
      </Head>
      <BG>
        <Block className='p-0'>
          <Title className='mt-20 p-5'>
            僕たちのしゅみらぼ
          </Title>

          <Icons className='pt-6'>

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
              <Link href="/.auth/login/aad?post_login_redirect_uri=https://proud-field-0aee10e00.1.azurestaticapps.net/user ">
                <a>
                  <Img src="/azure_icon.svg" />
                </a>
              </Link>
            </InputButton>
          </Icons>
          <Message className='rounded-xl'>
            ログイン先をえらんでね
          </Message>
        </Block>
      </BG>
    </div>
  )
}



export default Home

const BG = styled.div`
  background-color: #f4c530;
  background-image:
    radial-gradient(#f0daa1 20%, transparent 20%),
    radial-gradient(#f0daa1 20%, transparent 20%);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  min-height: 100vh;

`

const Block = styled.div`
  display:flex;
  flex-flow: column;
  
`
const Title = styled.div`
  text-align: center;
  font-size: 45px;
  vertical-align: middle;
  background-color: white;
  border-top: 3px solid #333;
  border-bottom: 3px solid #333;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.6);
`

const Message = styled.div`
  font-size: 18px;
  border: solid;
  padding: 5px;
  background-color: white;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  margin: auto;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.6);
`

const InputButton = styled.button`
  padding: 10px;

`

const Img = styled.img`
  width: 70px;
  background-color: white;
  border: solid;
  border-radius: 30%;
  padding: 4px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.6);
`


const Icons = styled.div`
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    margin: auto;
`
