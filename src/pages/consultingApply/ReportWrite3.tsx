import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import ContentsTitle from "../../components/ContentsTitle";
import Button from "../../components/Button";
import Textbox from "../../components/Textbox";
import Checkbox from "../../components/Checkbox";
import TextArea from "../../components/TextArea";

// 최종결과보고서
const ReportWrite3: FC = () => {
   // 학교명
   const [A_1,setA_1] = useState<string>('');
   //  일시
   const [B_1,setB_1] = useState<string>('');
   // 컨설턴트 이름
   const [C_1,setC_1] = useState<string>('');
   // 컨설턴트 이름
   const [C_2,setC_2] = useState<string>('');
   // 학교현황
   const [D_1,setD_1] = useState<string>('');
   // 컨설팅 요청사항
   const [E_1,setE_1] = useState<string>('');
   // 컨설팅 주요 내용
   const [F_1,setF_1] = useState<string>('');
   // 제언
   const [G_1,setG_1] = useState<string>('');
   // 우수사항
   const [H_1,setH_1] = useState<string>('');

   return (
      <Styled.ReportWrite3>
            <ContentsTitle depth2={'컨설팅 보고서 제출'} depth1={'컨설팅 신청 및 보고'} />
         <div className="con-top flex-between mb10">
               <Button>서식 1</Button>
            <div>
               <Button className="mr5">임시저장</Button>
               <Button>제출하기</Button>
            </div>
         </div>
         <div className="con-mid">
            <h5 className="align-center">서울 서초 중학교 최종결과보고서</h5>            
            <div className="mb10">2022년 학생평가 컨설팅 결과보고서 (컨설턴트)</div>
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
            <div className="mb20">※ 컨설팅 대상 학교 현황 및 컨설팅 요청 사항</div>
            <TextArea 
            title='● 학교현황' 
            className="mb20"
            value={D_1} onChange={(e) => setD_1(e.target.value)}
            />
            <TextArea 
            title='● 컨설턴트 요청사항' 
            className="mb20"
            value={E_1} onChange={(e) => setE_1(e.target.value)}
            />
            <TextArea 
            title='● 컨설팅 주요 내용' 
            className="mb20"
            value={F_1} onChange={(e) => setF_1(e.target.value)}
            />
            <div className="mb20">※ 기타사항</div>
            <TextArea 
            title='● 제언' 
            className="mb20"
            value={G_1} onChange={(e) => setG_1(e.target.value)}
            />
            <TextArea 
            title='● 우수사항' 
            className="mb20"
            value={H_1} onChange={(e) => setH_1(e.target.value)}
            />
         </div>
      </Styled.ReportWrite3>
   );
}


const Styled = {
   ReportWrite3: styled.div`
      
   `,
}


export default withLayout(ReportWrite3);