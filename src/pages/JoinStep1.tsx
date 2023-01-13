import { FC, HTMLProps, useCallback, useState } from "react";
import styled from 'styled-components';
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";

export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 다음단계 상태제어  
    */
   setStep ?: (e:any) => void;
}

const JoinStep1: FC<Props> = ({
   setStep,
}) => {

   // 이용약관
   const [checkData, setCheckData] = useState<any>([]);

   const onCheck = (checked: boolean, name: string) => {
      if(checked){
         setCheckData([...checkData, name]);
      }else{
         setCheckData(checkData.filter((a:string)=> a !== name));
      }
   }

   const onAllCheck = (checked: boolean) => {
      if(checked){
         setCheckData(['check1','check2']);
      }else{
         setCheckData([]);
      }
   }
   return (
      <Styled.JoinStep1>
            <h4 className="mb10">이용약관</h4>
            <div className="terms mb10">
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/>
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/>
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/>
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/> 
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/>
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/>
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/>
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/>
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/>
               이용약관입니다. 이용약관입니다. 이용약관입니다. 이용약관입니다.<br/>
            </div>
            <Checkbox 
            label='이용약관에 동의합니다.' 
            name='check1'
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => onCheck(e.target.checked , e.target.name)}
            checked={checkData.includes('check1')}
            />
            <h4 className="mb10 mt30">개인정보 수집 및 이용동의</h4>
            <div className="terms mb10">
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
               개인정보 수집 및 이용동의입니다.<br/>
            </div>
            <Checkbox 
            label='개인정보 수집 및 이용 개인정보 취급 위탁 이용에 동의합니다.'
            name='check2'
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => onCheck(e.target.checked , e.target.name)}
            checked={checkData.includes('check2')}
            />
            <div className="mt50">
               <Checkbox 
               label='이용약관, 개인정보 수집 및 이용, 개인정보 취급 위탁 이용에 모두 동의합니다.'
               onChange={(e:React.ChangeEvent<HTMLInputElement>) => onAllCheck(e.target.checked)}
               checked={checkData.length == 2}
               />
            </div>
            <div className="foot mt30 flex-end">
               <Button className="mr5" onClick={()=>{
                  if(checkData.length !== 2) return window.alert('약관에 동의해주세요.');
                  else                       setStep && setStep(1);
               }}>다음</Button>
               <Button>취소</Button>
            </div>
      </Styled.JoinStep1>
   );
}

const Styled = {
   JoinStep1: styled.div`
      padding-top: 30px;
      .terms{
         height: 150px;
         overflow: auto;
         background: #fff;
         padding: 30px 10px;
         border: 1px solid;
      }     
   `,
}


export default JoinStep1;