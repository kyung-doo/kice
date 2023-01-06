import { FC, HTMLProps, ChangeEvent } from "react";
import styled from 'styled-components';

export interface Props extends HTMLProps<HTMLTextAreaElement> {
   /**
    * placeholder
    */
   placehoder ?: string;
   /**
    * 텍스트 입력시
    */
    onChange?: (value: any) => void;
    /**
     * 높이
     */
    h ?: string;
   /**
    * textarea 타이틀
    */
   title ?: string;
}

/**
 * textarea 컴포넌트
 */
const TextArea: FC<Props & {as?: any}> = ({ 
   className,
   placeholder,
   title,
   h
}) => {
   return (
      <Styled.TextArea className={className} h={h}>
         {
            title && <div className="mb10">{title}</div>
         }
         <textarea placeholder={placeholder}></textarea>
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