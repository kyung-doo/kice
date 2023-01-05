import { ChangeEvent, FC, useCallback, useLayoutEffect, useState } from "react";
import Button from "../components/Button";
import styled from 'styled-components';
import Textbox from "../components/Textbox";
import Checkbox from "../components/Checkbox";
import { useNavigate, Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";



const Login: FC = () => {

   const navigate = useNavigate();
   const [id, setId] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [autoLogin, setAutoLogin] = useState<boolean>(false);

   const { userData, login } = useUser();

   const onLogin = useCallback(() => {
      console.log('id: ', id, ', password: ', password, ', autologin: ', autoLogin)
      login(autoLogin, id, password);
   },[id, password, autoLogin]);


   if(userData) {
      return <Navigate to="/" replace={true} />;
   }


   return (
      <Styled.Login>
         <form onSubmit={onLogin}>
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
               <Button className="mt20" type="submit">로그인</Button>
            </div>
            <div className="loginFoot">
               <Checkbox 
                  label="자동로그인"
                  checked={autoLogin} 
                  onChange={() => setAutoLogin(!autoLogin)}
               />
               <div className="align-right">
                  <Button as="a" onClick={() => navigate('/join')}>회원가입</Button><br />
                  <Button as="a" onClick={() => navigate('/find-id-password')}>아이디 / 비밀번호 찾기</Button>
               </div>
            </div>
         </form>
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