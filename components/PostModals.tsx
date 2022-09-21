import React,{ComponentPropsWithRef, useState} from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { postModalsState } from '../pages/user';

interface PostModalsProps extends ComponentPropsWithRef<"div"> {
  isShow: boolean;
}
/* interfaceで型定義を行わないと、booleanの値が変更されても挙動がおかしくなる */

type postContent = {
  work: string
  thought: string
  url: string
  point: number
}

export const PostModals = () => {
  const [isShow, setISShow] = useRecoilState<boolean>(postModalsState)

  /* 入力フォームのための定義 */
  const [postContent, setPostContent] = useState<postContent>({
    work: '',
    thought: '',
    url: '',
    point: 0,
  })

  const clickHandler = () => {
    setISShow(false)
  }


/*  console.log(isHide)
    useStateの関数は非同期処理だから後に付けても、
    この分で出力されるのは一個前と一緒 */

  /*  console.log(isShow)
      型定義をしていなかったら出力がおかしくなった */

  return(
    <div>
    {isShow && <BG>
        <FormVisual className='rounded'>
          <CancelButton onClick={clickHandler}>
            <Img src="/close_button.svg" />
          </CancelButton>
          <WorkBox className='ml-3 mb-2 rounded'>
            <InputForm
                name="work"
                type="text"
              />
          </WorkBox>
          <ThoughtBox className='rounded'>
            <InputTextarea className=''
                name="thought"
                
              />
          </ThoughtBox>
          <URLBox>
            <InputForm
                name="url"
                type="url"
              />
          </URLBox>
          <PointBox className='rounded'>
          <InputPoint className='rounded'
                name="point"
                type="number"
              />
          </PointBox>

          <SubmitButton className='px-3 py-2 rounded'>
          <InputForm
                type="submit"
                value="投稿"
              />
          </SubmitButton>
        </FormVisual>
    </BG>}
    </div>
  )
}





const BG = styled.div`
/* 画面全体を覆う設定 */
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

/* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;


`

const FormVisual = styled.div`
  position: relative;
  margin: 0.5em;
  padding: 1em;
  width: 400px;
  height: 230px;
  background-color: #fff0c3;
`

const CancelButton = styled.button`
  position: absolute;
  right: 5px;
  top: 0px;
  width: 30px;
  height: 35px;
`

const WorkBox = styled.div`
  border: 1px solid;
  width: 200px;
  height: 20px;
`

const ThoughtBox = styled.div`
  border:1px solid #4169e2;
  padding-left: 5px;
  height: 100px;
  margin: auto 10px;
`
const URLBox = styled.div`
  margin: 8px 10px;
`
const PointBox = styled.div`
  border: 1px solid #00a692;
  width: 5vw;
  height: 4vh;
  text-align: center;
  background-color: white;
  margin-left: 10px;

`

const SubmitButton = styled.button`
  position: absolute;
  right: 24px;
  bottom: 16px;
  color: white;
  background-color: #e73245;
`

const Img = styled.img`
  
`

const InputForm = styled.input`
  width:100%;
  height:100%;
`
/* styled-components styledのあとの様式に注意 imgやinputなど */

const InputPoint = styled.input`
  width: 100%;
  height: 100%;
  
`
const InputTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
`