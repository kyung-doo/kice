import { FC, HTMLProps } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Button from "../components/Button";

export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 다음단계 상태제어  
    */
   setStep ?: (e:any) => void;
}

const JoinStep3: FC<Props> = () => {
   const navigation = useNavigate();

   return (
      <Styled.JoinStep3>
         가입이 완료되었습니다.
         로그인 화면으로 이동합니다.
         <Button onClick={()=>navigation('/login')}>로그인</Button>
      </Styled.JoinStep3>
   );
}


const Styled = {
   JoinStep3: styled.div`
   background: #fff;
     
      
   `,
}


export default JoinStep3;