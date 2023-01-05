import { FC, HTMLProps } from "react";
import styled, { css } from 'styled-components';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';



export interface Props extends ReactSelectProps {
   
}

/**
 * 버튼 컴포넌트
 */
const Select: FC<Props & {as?: any}> = ({ 
   className,
   ...props
}) => {

   return (
      <Styled.Select className={className}>
         <ReactSelect 
            isSearchable={false}
            isClearable={false}
            {...props} 
         />
      </Styled.Select>
   );
}

const Styled = {
   Select: styled.div<Props>`
      
   `,
}

export default Select;