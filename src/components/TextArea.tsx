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
}

/**
 * textarea 컴포넌트
 */
const TextArea: FC<Props & {as?: any}> = ({ 
   className,
   onChange,
   placeholder = '내용을 입력해주세요.'
}) => {

   return (
      <Styled.TextArea 
      className={className} 
      onChange={(e:ChangeEvent<HTMLTextAreaElement>) => onChange && onChange(e.target.value)} 
      placeholder={placeholder} />
   );
}

const Styled = {
   TextArea: styled.textarea<Props>`
      width: 100%;
   `,
}

export default TextArea;