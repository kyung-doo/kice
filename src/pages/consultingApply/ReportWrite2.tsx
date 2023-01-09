import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import ContentsTitle from "../../components/ContentsTitle";
import Button from "../../components/Button";
import Textbox from "../../components/Textbox";
import Checkbox from "../../components/Checkbox";
import TextArea from "../../components/TextArea";

// 컨설팅 신청 및 보고 > 컨설팅 보고서 제출
// 사전협의서
const ReportWrite2: FC = () => {
 // 학교명
 const [A_1,setA_1] = useState<string>('');
 //  일시
 const [B_1,setB_1] = useState<string>('');
 // 컨설턴트 이름
 const [C_1,setC_1] = useState<string>('');
 // 컨설턴트 이름
 const [C_2,setC_2] = useState<string>('');
 // 수혜학교-컨설턴트 간 사전 협의사항
 const [D_1,setD_1] = useState<string>('');
 // 컨설턴트 간 사전 협의사항
 const [E_1,setE_1] = useState<string>('');
 // 기타사항
 const [F_1,setF_1] = useState<string>('');

   return (
      <Styled.ReportWrite2>
             <ContentsTitle depth2={'컨설팅 보고서 제출'} depth1={'컨설팅 신청 및 보고'} />
         <div className="con-top flex-between mb10">
               <Button>서식 1</Button>
            <div>
               <Button className="mr5">임시저장</Button>
               <Button>제출하기</Button>
            </div>
         </div>
         <div className="con-mid">
            <h5 className="align-center">서울 서초 중학교 사전협의서</h5>            
            <div className="mb10">2022년 학생평가 컨설팅 사전협의서</div>
            <table className="mb20">
               <colgroup>
                  <col width='15%' />
                  <col width='35%' />
                  <col width='15%' />
                  <col width='35%' />
               </colgroup>
               <tbody>
                  <tr>
                     <th>컨설팅 학교명</th>
                     <td><Textbox value={A_1} onChange={(e) => setA_1(e.target.value)}/></td>
                     <th>컨설팅 일시</th>
                     <td><Textbox value={B_1} onChange={(e) => setB_1(e.target.value)}/></td>
                  </tr>
                  <tr>
                     <th rowSpan={2}>컨설턴트</th>
                     <td className="flex-between" colSpan={2}>
                        <span>성명</span>
                        <Textbox value={C_1} onChange={(e) => setC_1(e.target.value)}/>
                        <Checkbox label='서명' labelArrow='left' />   
                        <span>소속(직위)</span>
                     </td>
                  </tr>
                  <tr>
                     <td className="flex-between" colSpan={2}>
                        <span>성명</span>
                        <Textbox value={C_2} onChange={(e) => setC_2(e.target.value)} />
                        <Checkbox label='서명' labelArrow='left' />   
                        <span>소속(직위)</span>
                     </td>
                  </tr>
               </tbody>
            </table>
            <TextArea 
            title='수혜학교-컨설턴트 간 사전 협의 사항' 
            className="mb20"
            value={D_1} onChange={(e) => setD_1(e.target.value)}
            />
            <TextArea 
            title='컨설턴트 간 사전 협의사항' 
            className="mb20"
            value={E_1} onChange={(e) => setE_1(e.target.value)}
            />
            <TextArea 
            title='기타사항' 
            className="mb20"
            value={F_1} onChange={(e) => setF_1(e.target.value)}
            />
         </div>
      </Styled.ReportWrite2>
   );
}

const Styled = {
   ReportWrite2: styled.div`
      
   `,
}


export default withLayout(ReportWrite2);