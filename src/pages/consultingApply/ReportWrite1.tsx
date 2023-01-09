import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import ContentsTitle from "../../components/ContentsTitle";
import Button from "../../components/Button";
import Textbox from "../../components/Textbox";
import Checkbox from "../../components/Checkbox";
import TextArea from "../../components/TextArea";

const ReportWrite1: FC = () => {

   return (
      <Styled.ReportWrite1>
         <ContentsTitle depth2={'컨설팅 보고서 제출'} depth1={'컨설팅 신청 및 보고'} />
         <div className="con-top mb10">
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
                     <td><Textbox /></td>
                     <th>일시</th>
                     <td><Textbox /></td>
                  </tr>
                  <tr>
                     <th>컨설팅 담당</th>
                     <td className="flex-between">
                        <Textbox />
                        <Checkbox label='서명' labelArrow='left' />   
                     </td>
                     <th>연락처</th>
                     <td><Textbox /></td>
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
      .con{
         &-top{
            display: flex;
            justify-content: space-between;
            align-items: center;
         }
         &-mid{
            th,td{
               padding: 10px;
            }
         }
      }
   `,
}


export default withLayout(ReportWrite1);