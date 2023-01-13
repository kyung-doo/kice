import { FC, HTMLProps, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Button from "../components/Button";
import Textbox from "../components/Textbox";
import RadioGroup from "../components/RadioGroup";
import Radio from "../components/Radio";
import Select from "../components/Select";

const emailOptions= [
   {label: 'naver.com', value: 'naver'},
   {label: 'gmail.com', value: 'gmail'},
   {label: 'daum.net', value: 'daum'},
   {label: '직접 입력', value: 'direct'},
];

// 연도 생성
const yearArr : {}[] = [];
const getYear = new Date().getFullYear();

Array.from(Array(100), (k, i) => yearArr.push({
   label: getYear - i, 
   value: getYear - i
}));

// 월 생성
const monthArr : {}[] = [];
for(let i=1; i<13; i++){
   let k = i < 10 ? `0${i}` : i;
   monthArr.push({ label: k, value: k });
}

export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 다음단계 상태제어  
    */
   setStep ?: (e:any) => void;
}

const JoinStep2: FC<Props> = ({ setStep }) => {

   // input
   const [ id, setId ] = useState<string>('');
   const [ pw, setPw ] = useState<string>('');
   const [ checkPw, setCheckPw ] = useState<string>('');
   const [ name, setName ] = useState<string>('');
   const [ phone, setPhone ] = useState<string>('');
   const [ email, setEmail ] = useState<string>('');
   const [ emailAdress, setEmailAdress  ] = useState<string>('');
   const [ scName, setScName ] = useState<string>('');

   // radio
   const [gender, setGender] = useState<string>('male');
   const [type, setType] = useState<any>('value1');
   
   // select
   const [emailSelet, setEmailSelect] = useState<any>();
   const [year, setYear] = useState<any>();
   const [month, setMonth] = useState<any>();
   const [date, setDate] = useState<any>();

   // 연도, 월에 따라 변경되는 일수 구하기
   const [dateArr, setDateArr] = useState<any>([
      { label:'연도와 월을 선택해주세요.', value: null}
   ]);

   // 이메일 직접입력시
   useEffect(()=>{
      if(emailSelet){
         if(emailSelet?.value == 'direct') {
            setEmailAdress('');
            // emailRef.current?.focus();
            return;
         }
         setEmailAdress(emailSelet?.label);
      }
   },[emailSelet])

   // 연도, 달에 따라 변하는 일수 구하기
   useEffect(()=>{
      if(year && month){
         // 월의 일수
         const dateLength = new Date(year.value,month.value,0).getDate();

         const arr: {}[] = [];
         for(let i=1; i<=dateLength; i++){
            let k = i < 10 ? `0${i}` : i;
            arr.push({ label: k, value: k });
         }

         setDateArr(arr);
      }
   },[year,month])

   return (
      <Styled.JoinStep2>
         <h4 className="mb10 mt20">이용약관</h4>
         <table className="mb20">
            <colgroup>
               <col width='15%'/>
               <col width='85%'/>
            </colgroup>
            <tbody>
               <tr>
                  <th>아이디</th>
                  <td>
                     <Textbox name='id' value={id} w='400px' className="mr10"
                     onChange={(e)=>setId(e.target.value)}
                     placeholder="4~12자의 영문소문자, 숫자를 조합하여 입력하세요."
                     />
                     <Button>중복확인</Button>

                  </td>
               </tr>
               <tr>
                  <th>비밀번호</th>
                  <td>
                     <Textbox name='pw' value={pw} w='550px'
                     onChange={(e)=>setPw(e.target.value)}
                     placeholder="영문대/소문자, 숫자, 특수문자 중 3종류를 조합하여 8~16자로 입력해주세요."
                     type='password'                     
                     />
                  </td>
               </tr>
               <tr>
                  <th>비밀번호 확인</th>
                  <td>
                     <Textbox name='checkPw' value={checkPw} w='550px'
                     onChange={(e)=>setCheckPw(e.target.value)}
                     type='password'                     
                     />
                     </td>
               </tr>
               <tr>
                  <th>이름</th>
                  <td><Textbox name='name' value={name} onChange={(e)=>setName(e.target.value)}/></td>
               </tr>
               <tr>
                  <th>성별</th>
                  <td>
                     <RadioGroup value={gender} onChange={setGender} arrow='hor'>
                        <Radio 
                           name="radio1"
                           label="남자"
                           value="male"
                        />
                        <Radio 
                           name="radio1"
                           label="여자"
                           value="female"
                        />
                     </RadioGroup>
                  </td>
               </tr>
               <tr>
                  <th>생년월일</th>
                  <td className="flex-align">

                     <Select w='200px' 
                     options={yearArr} 
                     value={year} 
                     onChange={setYear}
                     />년

                     <Select w='200px'
                     options={monthArr} 
                     value={month} 
                     onChange={setMonth}/>월

                     <Select w='200px'
                     options={dateArr} 
                     value={date} 
                     onChange={setDate}
                     placeholder='선택'
                     />일

                  </td>
               </tr>
               <tr>
                  <th>휴대폰번호</th>
                  <td><Textbox name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/></td>
               </tr>
               <tr>
                  <th>이메일</th>
                  <td className="flex-align">
                     <Textbox name='email' value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="ID"
                        />
                     @
                     <Textbox name='emailAdress' value={emailAdress} 
                        onChange={(e)=>setEmailAdress(e.target.value)}
                        readOnly={emailSelet?.value !== 'direct'}
                        placeholder=""
                        />
                        <Select w='200px' 
                        options={emailOptions} 
                        value={emailSelet} 
                        onChange={setEmailSelect}
                        placeholder='선택'
                        />
                     </td>
               </tr>
               <tr>
                  <th>회원유형</th>
                  <td>
                  <RadioGroup value={type} onChange={setType} arrow='hor'>
                        <Radio 
                           name="radio2"
                           label="컨설턴트"
                           value="value1"
                        />
                        <Radio 
                           name="radio2"
                           label="컨설팅 학교 교사"
                           value="value2"
                        />
                        <Radio 
                           name="radio2"
                           label="사업관계자"
                           value="value3"
                        />
                     </RadioGroup>
                  </td>
               </tr>
            </tbody>
         </table>
         <h4 className="mb10">교사인증</h4>
         <table>
            <colgroup>
               <col width='15%'/>
               <col width='85%'/>
            </colgroup>
            <tbody>
               <tr>
                  <th>교육행정인증서</th>
                  <td><Button>교육행정 전자서명 인증서 등록 ▷</Button></td>
               </tr>
            <tr>
               <th>학교명</th>
               <td>
                  <Textbox name='scName' value={scName} onChange={(e=>setScName(e.target.value))}/>
                  <Button>검색</Button>
               </td>
            </tr>
            </tbody>
         </table>
         <div className="foot mt30 flex-end">
               <Button className="mr5" onClick={()=> setStep && setStep(2)}>다음</Button>
               <Button>취소</Button>
            </div>
      </Styled.JoinStep2>
   );
}

const Styled = {
   JoinStep2: styled.div`
   background: #f2f2f2;
      
   `,
}


export default JoinStep2;