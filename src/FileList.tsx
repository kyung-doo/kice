import { FC } from "react";
import styled from "styled-components";



const FileList: FC = () => {

   return (
      <Styled.FileList>
         <h1>파일리스트</h1>
         <table>
            <colgroup>
            <col width="15"/>
            <col width="25"/>
            <col width="45"/>
            <col width="15"/>
            <col width="15"/>
            </colgroup>

            <thead>
               <tr>
                  <th>1depth</th>
                  <th>2depth</th>
                  <th>경로</th>
                  <th>HTML 진행상태</th>
                  <th>비고</th>
               </tr>
            </thead>
            <tbody>

               <tr>
                  <td>로그인</td>
                  <td></td>
                  <td><a href="/login" target="_blank">/login</a></td>
                  <td></td>
                  <td></td>
               </tr>

               <tr>
                  <td>로그아웃</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>회원가입</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>메인</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>

               <tr>
                  <td rowSpan={4}>컨설팅 신청 및 보고</td>
                  <td>컨설팅 일정</td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>신청</td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>보고서 제출</td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>컨설팅 학교선택</td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>

               <tr>
                  <td rowSpan={3}>컨설팅 공간</td>
                  <td>사전협의안내</td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>본컨설팅</td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>Q&A</td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>

            </tbody>
         </table>
      </Styled.FileList>
   );
}


const Styled = {
   FileList: styled.div`
      font-size: 13px;
      padding: 10px;
      h1{
         padding-left: 20px;
         font-size: 24px;
         height: 40px;
         line-height: 40px;
         border-bottom: 3px solid #000e3d;
         font-size: 1.8em;
         letter-spacing: -1px
      }
      table{
         table-layout:fixed;
         border-collapse:collapse;
         width:100%;
         border-top:2px solid #ccc;
         border-bottom:1px solid #ccc
      }
      table thead th{
         height:30px;
         border:1px solid #ccc;
         background:#f5f5f5;
         vertical-align: middle;
      }
      
      table tbody td{
         height:35px;
         padding:0 3%;
         border:1px solid #ccc;
         word-wrap:break-word;
         vertical-align: middle;
      }
   `,
}


export default FileList;