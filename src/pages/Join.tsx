import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import Footer from "../layout/Footer";
import JoinStep1 from "./JoinStep1";
import JoinStep2 from "./JoinStep2";
import JoinStep3 from "./JoinStep3";

const Join: FC = () => {

   const [step, setStep] = useState<number>(0);

   return (
      <Styled.Join>
         <div className="inner">
            <h1 className="align-center mb20">회원가입</h1>
            <ol className="top flex">
               <li className={step == 0 ? 'active' : ''}>01. 약관동의</li>
               <li className={step == 1 ? 'active' : ''}>02. 정보입력</li>
               <li className={step == 2 ? 'active' : ''}>03. 가입완료</li>
            </ol>
            {
              {
                  0 : <JoinStep1 setStep={setStep} />,
                  1 : <JoinStep2 setStep={setStep} />,
                  2 : <JoinStep3 setStep={setStep} />,
              }[step]
            }
         </div>
         <Footer/>
      </Styled.Join>
   );
}

const Styled = {
   Join: styled.div`
      margin: 0 auto;
      width: 1200px;
      background: #f2f2f2;
      .inner{
         padding: 30px 20px 20px 20px;
      }
      h1{
         font-size: 25px;
      }
      .top{
         li{
            width: 33.3%;
            text-align: center;
            padding: 15px 0;
            background: #fff;
            border: 1px solid #ccc;
            &.active{
               border: 1px solid red;
            }
         }
      }
     
      
   `,
}


export default Join;