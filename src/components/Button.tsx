import { FC, HTMLProps } from "react";
import styled, { css } from 'styled-components';




export interface Props extends HTMLProps<HTMLButtonElement> {
   
   /**
    * 클릭시 이벤트  
    * */
   onClick ?: (e : React.MouseEvent<HTMLButtonElement>)=> void
}

/**
 * 버튼 컴포넌트
 */
const Button: FC<Props & {as?: any}> = ({ 
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