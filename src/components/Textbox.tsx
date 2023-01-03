import { FC, HTMLProps } from "react";
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
}


/**
 * 텍스트 인풋 컴포넌트
 */
const Textbox: FC<Props & {as?: any}> = ({ 
   className, 
   ...props
}) => {
   return (
      <Styled.Textbox className={className} {...props} />
   );
}

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
      &:focus{
         border-color: #000;
      }
      &:disabled{
         background-color: #f1f1f1;
      }
      &:read-only:focus{
         border-color: #d6d6d7;
      }
   `,
}

export default Textbox;