import { FC, HTMLProps, useState,useEffect } from "react";
import styled from 'styled-components';
import Button from "../components/Button";
import Textbox from "../components/Textbox";
import RadioGroup from "../components/RadioGroup";
import Radio from "../components/Radio";
import Select from "../components/Select";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { forEachChild } from "typescript";

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

const resolver = yupResolver(
   Yup
   .object()
   .shape({
      id: Yup.string()
         .required('아이디를 입력하세요.')
         .min(4, '아이디는 4글자 이상 입니다.')
         .max(12, '아이디는 12글자 이하 입니다.')
         .matches(/^[a-z0-9]+$/, '아이디는 영문 소문자 숫자만 입력 가능합니다.'),
      password: Yup.string()
         .required('비밀번호를 입력하세요.')
         .min(8, '비밀번호는 8글자 이상 입니다.')
         .max(16, '비밀번호는 16글자 이하 입니다.')
         .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~])[A-Za-z\d@$!%*?&~]{8,16}$/, '비밀번호는 영문대/소문자, 숫자, 특수문자중 3종류를 조합하여 사용해주세요.'),
      confirmPassword: Yup.string()
         .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
      name: Yup.string().required('이름을 입력하세요.'),
      year: Yup.object().required('생년월일을 입력하세요'),
      month: Yup.object().required('생년월일을 입력하세요'),
      date: Yup.object().required('생년월일을 입력하세요'),
      phone: Yup.string().required('휴대폰번호를 입력하세요'),
      email1: Yup.string().required('이메일을 입력하세요'),
      email2: Yup.string().required('이메일을 입력하세요'),
      scName: Yup.string().required('학교명 인증 바랍니다.'),
      gender: Yup.string(),
      type: Yup.string()
   })
)


export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 다음단계 상태제어  
    */
   setStep ?: (e:any) => void;
}

const JoinStep2: FC<Props> = ({ setStep }) => {
   const { 
      register, 
      control,
      handleSubmit, 
      formState: { errors },
      setValue: setFormValue,
      clearErrors,
      setFocus
   } = useForm({resolver: resolver});

   // input
   const [ scName, setScName ] = useState<string>('');

   // radio
   const [gender, setGender] = useState<string>('male');
   const [type, setType] = useState<any>('value1');
   
   // select
   const [emailSelect, setEmailSelect] = useState<any>();
   const [year, setYear] = useState<any>();
   const [month, setMonth] = useState<any>();
   const [date, setDate] = useState<any>();

   // 연도, 월에 따라 변경되는 일수 구하기
   const [dateArr, setDateArr] = useState<any>([
      { label:'연도와 월을 선택해주세요.', value: null}
   ]);

   // 연도, 달에 따라 변하는 일수 구하기
   useEffect(()=>{
      if(year && month){
         console.log(year,month);
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

   const onSubmit = ( data: any ) => {
      console.log(data);
      setStep && setStep(2);
   };


   return (
      <Styled.JoinStep2>
         <form onSubmit={handleSubmit(onSubmit)}>
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
                     <Textbox w='400px' className="mr10"
                     error={errors.id?.message} 
                     {...register('id')}
                     placeholder="4~12자의 영문소문자, 숫자를 조합하여 입력하세요."
                     />
                     <Button>중복확인</Button>

                  </td>
               </tr>
               <tr>
                  <th>비밀번호</th>
                  <td>
                     <Textbox w='550px'
                     {...register('password')}
                     error={errors.password?.message} 
                     placeholder="영문대/소문자, 숫자, 특수문자 중 3종류를 조합하여 8~16자로 입력해주세요."
                     type='password'                     
                     />
                  </td>
               </tr>
               <tr>
                  <th>비밀번호 확인</th>
                  <td>
                     <Textbox w='550px'
                     {...register('confirmPassword')}
                     error={errors.confirmPassword?.message} 
                     type='password'                     
                     />
                     </td>
               </tr>
               <tr>
                  <th>이름</th>
                  <td>
                     <Textbox 
                     {...register('name')}
                     error={errors.name?.message} 
                     />
                  </td>
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
                  <td>
                  <Controller
                  name="birth"
                  control={control}
                  render={({ field:{onChange, value,...others} }) => (
                     <div className="flex-align">
                        <Select
                        {...others}
                        options={yearArr}
                        onChange={(e:any)=>{ 
                           setYear(e);
                           setFormValue('year', e, { shouldValidate: true});
                        }}
                        error={errors.year?.message ? true : false}
                        />년
                        <Select
                        {...others}
                        options={monthArr}
                        onChange={(e:any)=>{
                           setMonth(e);
                           setFormValue('month', e, { shouldValidate: true});
                        }}
                        error={errors.month?.message ? true : false}
                        />월
                        <Select
                        {...others}
                        options={dateArr}
                        onChange={(e:any)=>{
                           setDate(e);
                           setFormValue('date', e, { shouldValidate: true});
                        }}
                        error={errors.date?.message ? true : false}
                        />일
                     </div>
                   )} 
                   /> 
                  <div className="mt5" style={{color: 'red'}}>
                     {errors.year?.message as string || errors.month?.message as string || errors.date?.message as string}
                  </div>
                  </td>
               </tr>
               <tr>
                  <th>휴대폰번호</th>
                  <td>
                     <Textbox 
                     type='number'
                     error={errors.phone?.message} 
                     {...register('phone')}
                     />
                     </td>
               </tr>
               <tr>
                  <th>이메일</th>
                  <td>
                     <div className="flex-align">
            
                        <Textbox 
                           placeholder="ID"
                           {...register('email1')}
                           error={errors.email1?.message ? true : false}
                           />
                        @
                        <Textbox 
                           {...register('email2')}
                           error={errors.email2?.message ? true : false} 
                           readOnly={!emailSelect ? true : emailSelect.value == 'direct' ? false : true}
                        />
                        <Select w='200px' 
                        options={emailOptions} 
                        value={emailSelect} 
                        placeholder='선택'
                        onChange={(e: any) => {
                           setEmailSelect(e);
                           if(!e || e.value === 'direct') {
                              setFormValue('email2', '');
                              setFocus('email2');
                           } else {
                              setFormValue('email2', e.label, { shouldValidate: true});
                           }
                        }}
                        />
                     </div>
                     <div className="mt5" style={{color: 'red'}}>
                        {errors.email1?.message as string || errors.email2?.message as string}
                        </div>
                     </td>
               </tr>
               <tr>
                  <th>회원유형</th>
                  <td>
                  <RadioGroup value={type} onChange={setType} arrow='hor' >
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
                  <Textbox 
                  {...register('scName')}
                  error={errors.scName?.message}
                  // value={scName} 
                  // onChange={(e=>setScName(e.target.value))}
                  />
                  <Button>검색</Button>
               </td>
            </tr>
            </tbody>
         </table>
         <div className="foot mt30 flex-end">
               <Button type='submit' className="mr5">다음</Button>
               <Button>취소</Button>
            </div>
      </form>
      </Styled.JoinStep2>
   );
}

const Styled = {
   JoinStep2: styled.div`
   background: #f2f2f2;
      
   `,
}


export default JoinStep2;