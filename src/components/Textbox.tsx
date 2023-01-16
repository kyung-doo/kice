import { FC, HTMLProps, ChangeEvent, forwardRef } from "react";
import styled from "styled-components";


export interface Props extends HTMLProps<HTMLInputElement> {
   /**
    * 풀사이즈 ( width 100% )
    */
   f?: boolean;
   /**
    * width 값
    */
   w?: string;
   /**
    * 인풋 에러시
    */
   error?: any;
   /**
    * 텍스트 입력시
    */
   onChange ?: (e:any) => void;
   /**
    * input 타입
    */
   type ?: string;
   
}

/**
 * 텍스트 인풋 컴포넌트
 */
const Textbox = forwardRef<HTMLInputElement, Props & {as?: any}>(({
   className, 
   error,
   ...props
}, ref) => {
   return (
      <>
         <Styled.Textbox 
            ref={ref}
            className={`${className} ${error ? 'error' : ''}`} 
            {...props}
         />
         {(error && typeof error === 'string') && <Styled.Error>{error}</Styled.Error>}
      </>
   );
});

const Styled = {
   Textbox: styled.input<Props>`
      -webkit-appearance: none;
      border: .1rem solid #d6d6d7;
      background-color: #fff;
      height: 50px;
      padding: 0 20px;
      font-size: 14px;
      box-sizing: border-box;
      font-family: "Helvetica", "Arial", sans-serif;
      vertical-align: middle;
      color:#333;
      outline: none;
      width: ${props => props.f ? '100%' : props.w || ''};
      &[required] {
         background-color: #fff;
      }
      &:focus{
         border-color: #000;
      }
      &:disabled{
         background-color: #f1f1f1;
      }
      &:read-only:focus{
         border-color: #d6d6d7;
      }
      &.error {
         border-color: red;
      }
   `,
   Error: styled.p`
      margin-top: 5px;
      color: red;
   `,
}

export default Textbox;