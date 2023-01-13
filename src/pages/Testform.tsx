import { FC, useCallback, useState, ChangeEvent, useEffect } from "react";
import styled from 'styled-components';
import Select from "../components/Select";
import withLayout from "../layout/withLayout";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import Button from "../components/Button";
import Textbox from "../components/Textbox";
import TextArea from "../components/TextArea";



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
         .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/, '비밀번호는 영문대/소문자, 숫자, 특수문자중 3종류를 조합하여 사용해주세요.'),
      confirmPassword: Yup.string()
         .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
      sido: Yup.object()
         .required('시도를 선택하세요.'),
      memo: Yup.string()
         .required('컨설팅 신청 목적을 입력하세요.'),
      email1: Yup.string()
         .required('이메일을 입력하세요.'),
      email2: Yup.string()
         .required('이메일을 입력하세요.'),
   })
)


const sidoOptions= [
   {label: '서울', value: '서울'},
   {label: '경기도', value: '경기도'},
   {label: '대전', value: '대전'},
   {label: '대구', value: '대구'},
];

const emailOptions= [
   {label: 'naver.com', value: 'naver'},
   {label: 'gmail.com', value: 'gmail'},
   {label: 'daum.net', value: 'daum'},
   {label: '직접 입력', value: 'direct'},
];


const Testform: FC = () => {

   const { 
      register, 
      control,
      handleSubmit, 
      formState: { errors },
      setValue: setFormValue,
      clearErrors
   } = useForm({resolver: resolver});

   const [emailSite, setEmailSite] = useState<any>(null);


   const onSubmit = ( data: any ) => {
      console.log("form data", data);
   };


   return (
      <Styled.Testform>
         
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pt30 pb30">
               <Textbox 
                  f
                  placeholder="4~12자의 영문 소문자, 숫자를 조합하여 입력" 
                  {...register('id')}
                  error={errors.id?.message} 
               />
            </div>

            <div className="pb30">
               <Textbox 
                  f
                  type="password"
                  placeholder="영문대/소문자, 숫자, 특수문자중3종류를조합하여8~16자로입력해주세요" 
                  {...register('password')}
                  error={errors.password?.message} 
               />
            </div>

            <div className="pb30">
               <h1>이메일</h1>
               <div className="flex-align mt10">
                  <Textbox
                     w="200px"
                     {...register('email1')}
                  />
                  <span className="ml5">@</span>
                  <Textbox
                     w="200px"
                     className="ml5"
                     readOnly={!emailSite ? true : emailSite.value === 'direct' ? false : true }
                     {...register('email2')}
                  />
                  <Select
                     w="200px"
                     className="ml5"
                     options={emailOptions}
                     value={emailSite}
                     onChange={(e: any) => {
                        setEmailSite(e);
                        if(!e || e.value === 'direct') {
                           setFormValue('email2', '');
                        } else {
                           setFormValue('email2', e.label, { shouldValidate: true});
                        }
                     }}
                     placeholder="선택"
                  />
               </div>
               <div className="mt5" style={{color: 'red'}}>{errors.email1?.message as string || errors.email2?.message as string}</div>
            </div>

            <div className="pb30">
               <Textbox 
                  f
                  type="password"
                  placeholder="비밀번호 확인" 
                  {...register('confirmPassword')}
                  error={errors.confirmPassword?.message} 
               />
            </div>

            <div className="pb30">
               <Controller
                  name="sido"
                  control={control}
                  render={({ field }) => (
                     <Select
                       options={sidoOptions}
                       placeholder="시도를 선택하세요."
                       error={errors.sido?.message}
                       {...field}
                     />
                   )} 
               />  
            </div>

            <div className="pb30">
               <TextArea 
                  className="mb20"
                  title={'컨설팅 신청 목적'}
                  placeholder={'예1) 평가도구 개발\n예2) 평가 시행 및 채점'}
                  {...register('memo')}
                  error={errors.memo?.message} 
               />
            </div>
         
            <Button type="submit">확인</Button>
         </form>

      </Styled.Testform>

   );
}


const Styled = {
   Testform: styled.div`
      padding: 20px;
   `,
}


export default withLayout(Testform);