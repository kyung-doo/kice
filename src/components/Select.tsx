import { FC, HTMLProps } from "react";
import styled, { css } from 'styled-components';
import ReactSelect, { OptionProps, Props as ReactSelectProps } from 'react-select';
import { useCallback } from "@storybook/addons";



export interface Props extends ReactSelectProps {
}

/**
 * select 컴포넌트
 * props는 https://react-select.com/home 참고
 */
const Select: FC<Props & {as?: any}> = ({ 
   className,
   placeholder="선택해 주세요.",
   ...props
}) => {

   return (
      <Styled.Select className={className}>
         <ReactSelect 
            classNamePrefix="select"
            isSearchable={false}
            isClearable={false}
            placeholder={placeholder}
            {...props} 
         />
      </Styled.Select>
   );
}

const Styled = {
   Select: styled.div<Props>`
      .select__control{
         min-width: 150px;
      }
   `,
}

export default Select;