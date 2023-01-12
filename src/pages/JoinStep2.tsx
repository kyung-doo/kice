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

const JoinStep2: FC<Props> = () => {

   return (
      <Styled.JoinStep2>
        
      </Styled.JoinStep2>
   );
}


const Styled = {
   JoinStep2: styled.div`
   background: #fff;
     
      
   `,
}


export default JoinStep2;