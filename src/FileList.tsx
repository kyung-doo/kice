import { FC } from "react";
import styled from "styled-components";



const FileList: FC = () => {

   return (
      <Styled.FileList>
         <h1>파일리스트</h1>
         <table>
            <colgroup>
            <col width="16"/>
            <col width="15"/>
            <col width="15"/>
            <col width="40"/>
            <col width="15"/>
            <col width="15"/>
            </colgroup>

            <thead>
               <tr>
                  <th>1depth</th>
                  <th>2depth</th>
                  <th>3depth</th>
                  <th>경로</th>
                  <th>진행상태</th>
                  <th>비고</th>
               </tr>
            </thead>
            <tbody>

               <tr>
                  <td>로그인</td>
                  <td></td>
                  <td></td>
                  <td><a href="/login" target="_blank">/login</a></td>
                  <td></td>
                  <td></td>
               </tr>

               <tr>
                  <td>회원가입</td>
                  <td></td>
                  <td></td>
                  <td><a href="/join" target="_blank">/join</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>아이디/비밀번호 찾기</td>
                  <td></td>
                  <td></td>
                  <td><a href="/find-id-password" target="_blank">/find-id-password</a></td>
                  <td></td>
                  <td></td>
               </tr>

               <tr>
                  <td>메인</td>
                  <td></td>
                  <td></td>
                  <td><a href="/" target="_blank">/</a></td>
                  <td></td>
                  <td></td>
               </tr>




               <tr>
                  <td rowSpan={9}>컨설팅 신청 및 보고</td>
                  <td>컨설팅 일정</td>
                  <td></td>
                  <td><a href="/consulting-apply/consulting-schedule" target="_blank">/consulting-apply/consulting-schedule</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td rowSpan={3}>신청</td>
                  <td>컨설팅 신청 인트로</td>
                  <td><a href="/consulting-apply/apply-main" target="_blank">/consulting-apply/apply-main</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>컨설팅 신청</td>
                  <td><a href="/consulting-apply/apply-write" target="_blank">/consulting-apply/apply-write</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>컨설팅 신청완료</td>
                  <td><a href="/consulting-apply/apply-comp" target="_blank">/consulting-apply/apply-comp</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td rowSpan={4}>보고서 제출</td>
                  <td>컨설팅 보고서 메인</td>
                  <td><a href="/consulting-apply/report-main" target="_blank">/consulting-apply/report-main</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>결과보고서 작성</td>
                  <td><a href="/consulting-apply/report-wirte1" target="_blank">/consulting-apply/report-wirte1</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>사전협의서 작성</td>
                  <td><a href="/consulting-apply/report-wirte2" target="_blank">/consulting-apply/report-wirte2</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>최종결과보고서 작성</td>
                  <td><a href="/consulting-apply/report-wirte3" target="_blank">/consulting-apply/report-wirte3</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>컨설팅 학교선택</td>
                  <td>목록</td>
                  <td><a href="/consulting-apply/choose-school-board" target="_blank">/consulting-apply/choose-school-board</a></td>
                  <td></td>
                  <td></td>
               </tr>

               {/* 컨설팅 공간 */}
               <tr>
                  <td rowSpan={3}>컨설팅 공간</td>
                  <td>사전협의안내</td>
                  <td></td>
                  <td><a href="/consulting-space/pre-conference" target="_blank">/consulting-space/pre-conference</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>본 컨설팅</td>
                  <td></td>
                  <td><a href="/consulting-space/now-consulting" target="_blank">/consulting-space/now-consulting</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>Q&A</td>
                  <td>목록</td>
                  <td><a href="/consulting-space/qna-board" target="_blank">/consulting-space/qna-board</a></td>
                  <td></td>
                  <td></td>
               </tr>

               {/* 참고자료 */}
               <tr>
                  <td rowSpan={3}>참고자료</td>
                  <td rowSpan={2}>컨설팅자료</td>
                  <td>목록</td>
                  <td><a href="/reference/consulting-board" target="_blank">/reference/consulting-board</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>보기</td>
                  <td><a href="/reference/consulting-view" target="_blank">/reference/consulting-view</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>학생평가자료</td>
                  <td>목록</td>
                  <td><a href="/reference/student-board" target="_blank">/reference/student-board</a></td>
                  <td></td>
                  <td></td>
               </tr>


               {/* 컨설팅 센터 */}
               <tr>
                  <td rowSpan={6}>컨설팅 센터</td>
                  <td rowSpan={2}>공지사항</td>
                  <td>목록</td>
                  <td><a href="/consulting-center/notice-board" target="_blank">/consulting-center/notice-board</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>보기</td>
                  <td><a href="/consulting-center/notice-view" target="_blank">/consulting-center/notice-view</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td rowSpan={2}>FAQ</td>
                  <td>목록</td>
                  <td><a href="/consulting-center/faq-board" target="_blank">/consulting-center/faq-board</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>보기</td>
                  <td><a href="/consulting-center/faq-view" target="_blank">/consulting-center/faq-view</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td rowSpan={2}>Q&A</td>
                  <td>목록</td>
                  <td><a href="/consulting-center/qna-board" target="_blank">/consulting-center/qna-board</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>보기</td>
                  <td><a href="/consulting-center/qna-view" target="_blank">/consulting-center/qna-view</a></td>
                  <td></td>
                  <td></td>
               </tr>


               {/* 마이페이지 */}
               <tr>
                  <td rowSpan={5}>마이페이지</td>
                  <td>나의 컨설팅 일정</td>
                  <td></td>
                  <td><a href="/mypage/my-schedule" target="_blank">/mypage/my-schedule</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>나의 문의</td>
                  <td></td>
                  <td><a href="/mypage/my-faq" target="_blank">/mypage/my-faq</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>받은 쪽지</td>
                  <td></td>
                  <td><a href="/mypage/receive-note" target="_blank">/mypage/receive-note</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>나의 정보</td>
                  <td></td>
                  <td><a href="/mypage/my-info" target="_blank">/mypage/my-info</a></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                  <td>쪽지, 문자관리</td>
                  <td></td>
                  <td><a href="/mypage/admin-note" target="_blank">/mypage/admin-note</a></td>
                  <td></td>
                  <td><strong style={{color: 'red'}}>관리자 전용</strong></td>
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