import { FC, HTMLProps } from "react";
import styled, { css } from 'styled-components';


export interface Props extends HTMLProps<HTMLButtonElement>{
   /**
    * 클래스 이름
    */
   className?: string;
   /**
    * 태그 변경 (a 라고 주면 기본 button태그를 a태그로 변경)
    */
   as?: any;
   /**
    * 자식 엘레먼트
    */
   children: JSX.Element | string;
}

/**
 * 버튼 컴포넌트
 */
const Button: FC<Props> = ({ 
   className,
   children, 
   as,
   ...props
}) => {

   return (
      <Styled.Button 
         className={className} 
         as={as} 
         {...props}
      >
         {children}
      </Styled.Button>
   );
}

const Styled = {
   Button: styled.button<Props>`
      cursor: pointer;
      ${props => props.as === 'a' ?
         css`
            &:hover{
               text-decoration: underline;
            }
         `
         :
         css`
            
         `
      }
   `,
}

export default Button;