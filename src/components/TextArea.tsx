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
}

/**
 * textarea 컴포넌트
 */
const TextArea: FC<Props & {as?: any}> = ({ 
   className,
   placeholder = '내용을 입력해주세요.',
   ...props
}) => {

   return (
      <Styled.TextArea 
      className={className} 
      {...props}
      />
   );
}

const Styled = {
   TextArea: styled.textarea<Props>`
      width: 100%;
      padding: 20px;
      height: ${props => props.h};
   `,
}

export default TextArea;