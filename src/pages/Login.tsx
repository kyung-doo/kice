import { ChangeEvent, FC, useCallback, useState } from "react";
import Button from "../components/Button";
import styled from 'styled-components';
import Textbox from "../components/Textbox";
import Checkbox from "../components/Checkbox";
import { useNavigate } from "react-router-dom";
import Select from "../components/Select";



const Login: FC = () => {

   const navigate = useNavigate();
   const [id, setId] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [autoLogin, setAutoLogin] = useState<boolean>(false);


   const onLogin = useCallback(() => {
      console.log('id: ', id, ', password: ', password, ', autologin: ', autoLogin)
   },[id, password, autoLogin]);

   const selectOptions = [
      { value: 'val1', label: 'option1' },
      { value: 'val2', label: 'option2' },
      { value: 'val3', label: 'option3' }
     ]


   return (
      <Styled.Login>
         <h1 className="title">
            학생평가 컨설팅에 오신 것을 환영합니다.<br />
            서비스 이용을 위해 먼저 회원 가입을 해 주십시오
         </h1>
         <div className="loginWrap">
            <h4>로그인</h4>
            <div className="inputWrap mt20">
               <Textbox 
                  type="text" 
                  placeholder="아이디" 
                  f 
                  maxLength={10} 
                  value={id}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)} 
               />
               <Textbox 
                  className="mt10" 
                  type="password" 
                  placeholder="비밀번호" 
                  f 
                  maxLength={10} 
                  value={password} 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
               />
            </div>
            <Button className="mt20" onClick={onLogin}>로그인</Button>
         </div>
         <div className="loginFoot">
            <Checkbox 
               label="자동로그인"
               checked={autoLogin} 
               onChange={() => setAutoLogin(!autoLogin)}
            />
            <div className="align-right">
               <Button as="a" onClick={() => navigate({ pathname: '/consulting-apply/choose-school-board', search: '?pageId=1'})}>공지사항</Button><br />
               <Button as="a" onClick={() => navigate('/join')}>회원가입</Button><br />
               <Button as="a" onClick={() => navigate('/find-id-password')}>아이디 / 비밀번호 찾기</Button>
            </div>
         </div>
         <Select 
            className="select"
            options={selectOptions}
            defaultInputValue={selectOptions[0].value}
         />
      </Styled.Login>
   );
}


const Styled = {
   Login: styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      .idtext{
         font-weight: bold;
         color: red;
      }
      .title {
         text-align: center;
         margin-bottom: 50px;
         font-size: 26px;
      }
      .loginWrap{
         display: flex;
         align-items: center;
         flex-direction: column;
         justify-content: center;
         width: 600px;
         padding: 20px;
         box-sizing: border-box;
         border: solid 4px #000;
         > h4{
            font-size: 20px;
         }
         .inputWrap{
            width: 300px;
         }
      }
      .loginFoot {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         width: 600px;
         margin-top: 10px;
      }
   `,
}


export default Login;