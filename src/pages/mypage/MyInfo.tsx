import { FC, useRef, useEffect, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import ContentsTitle from "../../components/ContentsTitle";
import Textbox from "../../components/Textbox";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { emailOptions } from '../../utils/method';

const info = {
   이름 :'홍길동',
   성별 :'남자',
   생년월일 :'2000-00-00',
   휴대폰번호 :'010-0000-0000',
   이메일아이디 : 'sscho212235',
   이메일주소 : 'daum.net',
   학교:'서울 서초중학교',
   회원유형 :'홍길동',
   아이디 :'hong',
}

const MyInfo: FC = () => {
   const [userData, setUserData] = useState<any>(info);

   // 이메일 input
   const [emailId, setEmailId] = useState<string>(userData.이메일아이디);
   const [emailAdress, setEmailAdress] = useState<string>(userData.이메일주소);

   // 이메일 select
   const [selectOps,setSelectOps] = useState<any>();
   
   // 비밀번호
   const [pw, setPw] = useState<string>('');
   const [checkPw, setCheckPw] = useState<string>('');

   // const emailRef = useRef<HTMLInputElement>(null);

   // 직접입력 선택시 input 활성화
   
   useEffect(()=>{
      if(selectOps){
         if(selectOps?.value == 'direct') {
            setEmailAdress('');
            // emailRef.current?.focus();
            return;
         }
         setEmailAdress(selectOps?.label);
      }
   },[selectOps])


   return (
      <Styled.MyInfo>
         <ContentsTitle depth1={'마이페이지'} depth2={'나의 정보'} />
         <div>
            <table className="mb10">
               <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
               </colgroup>
               <tbody>
                  <tr>
                     <th>이름</th>
                     <td>{userData.이름}</td>
                  </tr>
                  <tr>
                     <th>성별</th>
                     <td>{userData.성별}</td>
                  </tr>
                  <tr>
                     <th>생년월일</th>
                     <td>{userData.생년월일}</td>
                  </tr>
                  <tr>
                     <th>휴대폰번호</th>
                     <td>{userData.휴대폰번호}</td>
                  </tr>
                  <tr>
                     <th>이메일</th>
                     <td className="flex">
                          <Textbox 
                          value={emailId}
                          onChange={(e)=>setEmailId(e.target.value)}
                          /> 
                          <span style={{ alignSelf: 'center'}} className='ml5 mr5'>@</span>
                          <Textbox 
                          value={emailAdress}
                          onChange={(e)=>setEmailAdress(e.target.value)}
                          readOnly={selectOps?.value !== 'I'}
                          className='mr10'
                        //   ref={emailRef}
                          /> 
                          <Select
                          options={emailOptions}
                          placeholder='선택해 주세요'
                          onChange={setSelectOps}
                          className='mr10'
                          />
                          <Button>수정완료</Button>
                     </td>
                  </tr>
                  <tr>
                     <th>학교</th>
                     <td>{userData.학교}</td>
                  </tr>
                  <tr>
                     <th>회원유형</th>
                     <td>{userData.회원유형}</td>
                  </tr>
                  <tr>
                     <th>아이디</th>
                     <td>{userData.아이디}</td>
                  </tr>
                  <tr>
                     <th>비밀번호</th>
                     <td>
                        <Textbox
                           value={pw}
                           onChange={(e)=>setPw(e.target.value)}
                           type='password'                     
                        />
                     </td>
                  </tr>
                  <tr>
                     <th>비밀번호 확인</th>
                     <td>
                        <Textbox
                           value={checkPw}
                           onChange={(e)=>setCheckPw(e.target.value)} 
                           type='password'                     
                        />
                        <Button>비밀번호변경</Button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </Styled.MyInfo>
   );
}


const Styled = {
   MyInfo: styled.div`
      
   `,
}


export default withLayout(MyInfo);