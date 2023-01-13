import { FC, forwardRef, HTMLProps } from "react";
import styled, { css } from 'styled-components';
import ReactSelect, { OptionProps, Props as ReactSelectProps } from 'react-select';
import { useCallback } from "@storybook/addons";



export interface Props extends ReactSelectProps {
   /**
    * width 값
    */
   w?: string;
   /**
    * 인풋 에러시
    */
   error?: any;
}

/**
 * select 컴포넌트
 * props는 https://react-select.com/home 참고
 */
const Select = forwardRef<any, Props & {as?: any}>(({
   className,
   w,
   placeholder="선택해 주세요.",
   error,
   ...props
}, ref) => {
   return (
      <>
         <Styled.Select 
            className={`${className} ${error ? 'error' : ''}`} 
            w={w}
         >
            <ReactSelect 
               ref={ref}
               classNamePrefix="select"
               isSearchable={false}
               isClearable={false}
               placeholder={placeholder}
               {...props} 
            />
         </Styled.Select>
         {(error && typeof error === 'string') && <Styled.Error>{error}</Styled.Error>}
      </>
      
   );
});

const Styled = {
   Select: styled.div<Props>`
      width: ${props => props.w || ''};
      > div, .select__control{
         height: 100%;
      }
   `,
   Error: styled.p`
      margin-top: 5px;
      color: red;
   `,
}

export default Select;