import { FC, HTMLProps, ChangeEvent, forwardRef } from "react";
import styled from 'styled-components';

export interface Props extends HTMLProps<HTMLTextAreaElement> {
   /**
    * placeholder
    */
   placehoder ?: string;
    /**
     * 높이
     */
   h ?: string;
   /**
    * textarea 타이틀
    */
   title ?: string;
   /**
    * 인풋 에러시
    */
   error?: any;
   /**
    * 텍스트 입력시
    */
   onChange ?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * textarea 컴포넌트
 */
const TextArea = forwardRef<HTMLTextAreaElement, Props & {as?: any}>(({
   className, 
   error,
   h,
   title,
   ...props
}, ref) => {
   return (
      <>
          <Styled.TextArea className={`${className} ${error ? 'error' : ''}`} h={h}>
            {
               title && <div className="mb10">{title}</div>
            }
            <textarea ref={ref} {...props}></textarea>
            {(error && typeof error === 'string') && <Styled.Error>{error}</Styled.Error>}
         </Styled.TextArea>
      </>
   );
});


const Styled = {
   TextArea: styled.div<Props>`
      textarea{
         width: 100%;
         padding: 20px;
         height: ${props => props.h};
         
      }
      &.error textarea {
         border-color: red;
      }
   `,
   Error: styled.p`
      margin-top: 5px;
      color: red;
   `,
}

export default TextArea;