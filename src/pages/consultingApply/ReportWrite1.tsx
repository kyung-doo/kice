import {FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import ContentsTitle from "../../components/ContentsTitle";
import Button from "../../components/Button";
import Textbox from "../../components/Textbox";
import Checkbox from "../../components/Checkbox";
import TextArea from "../../components/TextArea";

// 컨설팅 신청 및 보고 > 컨설팅 보고서 제출
// 결과보고서
const ReportWrite1: FC = () => {
   // 학교명
   const [A_1,setA_1] = useState<string>('');
   //  일시
   const [B_1,setB_1] = useState<string>('');
   // 컨설팅 담당
   const [C_1,setC_1] = useState<string>('');
   // 연락처
   const [D_1,setD_1] = useState<string>('');
   // 컨설팅 영역
   const [E_1,setE_1] = useState<string>('');
   // 컨설팅 주요 내용(간략히 작성)
   const [F_1,setF_1] = useState<string>('');
   // 계획안
   const [G_1,setG_1] = useState<string>('');

   return (
      <Styled.ReportWrite1>
         <ContentsTitle depth2={'컨설팅 보고서 제출'} depth1={'컨설팅 신청 및 보s고'} />
         <div className="con-top flex-between mb10">
               <Button>붙임 1</Button>
            <div>
               <Button className="mr5">임시저장</Button>
               <Button>제출하기</Button>
            </div>
         </div>
         <div className="con-mid">
            <h5 className="align-center">서울 서초 중학교 결과보고서</h5>            
            <div className="mb10">2022년 학생평가 컨설팅 결과보고서 (컨설팅 대상교)</div>
            <table className="mb20">
               <colgroup>
                  <col width='15%' />
                  <col width='35%' />
                  <col width='15%' />
                  <col width='35%' />
               </colgroup>
               <tbody>
                  <tr>
                     <th>학교명</th>
                     <td><Textbox value={A_1} onChange={(e) => setA_1(e.target.value)}/></td>
                     <th>일시</th>
                     <td><Textbox value={B_1} onChange={(e) => setB_1(e.target.value)}/></td>
                  </tr>
                  <tr>
                     <th>컨설팅 담당</th>
                     <td className="flex-between">
                        <Textbox value={C_1} onChange={(e) => setC_1(e.target.value)}/>
                        <Checkbox label='서명' labelArrow='left' />   
                     </td>
                     <th>연락처</th>
                     <td><Textbox value={D_1} onChange={(e) => setD_1(e.target.value)}/></td>
                  </tr>
               </tbody>
            </table>
            <TextArea title='컨설팅 영역' className="mb20"/>
            <TextArea title='컨설팅 주요 내용 (간략히 작성)' className="mb20"/>
            <TextArea title='컨설팅 내용을 반영한 2022학년도 2학기(또는 2023학년도 1학기) 학생평가 계획안(간략히 작성)' className="mb20"/>
         </div>
         <div className="con-foot align-center">
            <p>위와 같이『2022년학생평가컨설팅』결과보고서를 제출합니다.</p>
            <div>2023년 월 일</div>
            <span>서울 서초 중학교</span>
         </div>
         
      </Styled.ReportWrite1>
   );
}


const Styled = {
   ReportWrite1: styled.div`
   `,
}


export default withLayout(ReportWrite1);