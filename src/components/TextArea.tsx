import { FC, HTMLProps, ChangeEvent } from "react";
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
    * 텍스트 입력시
    */
    onChange ?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * textarea 컴포넌트
 */
const TextArea: FC<Props & {as?: any}> = ({ 
   className,
   h,
   title,
   ...props
}) => {
   return (
      <Styled.TextArea className={className} h={h}>
         {
            title && <div className="mb10">{title}</div>
         }
         <textarea {...props}></textarea>
      </Styled.TextArea>
   );
}


const Styled = {
   TextArea: styled.div<Props>`
      textarea{
         width: 100%;
         padding: 20px;
         height: ${props => props.h};
      }
   `,
}

export default TextArea;