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
                     <td><Textbox /></td>
                     <th>컨설팅 일시</th>
                     <td><Textbox /></td>
                  </tr>
                  <tr>
                     <th rowSpan={2}>컨설턴트</th>
                     <td className="flex-between" colSpan={2}>
                        <span>성명</span>
                        <Textbox />
                        <Checkbox label='서명' labelArrow='left' />   
                        <span>소속(직위)</span>
                     </td>
                  </tr>
                  <tr>
                     <td className="flex-between" colSpan={2}>
                        <span>성명</span>
                        <Textbox />
                        <Checkbox label='서명' labelArrow='left' />   
                        <span>소속(직위)</span>
                     </td>
                  </tr>
               </tbody>
            </table>
            <TextArea title='수혜학교-컨설턴트 간 사전 협의 사항' className="mb20"/>
            <TextArea title='컨설턴트 간 사전 협의사항' className="mb20"/>
            <TextArea title='기타사항' className="mb20"/>
         </div>
      </Styled.ReportWrite2>
   );
}

const Styled = {
   ReportWrite2: styled.div`
      
   `,
}


export default withLayout(ReportWrite2);