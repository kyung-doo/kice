import { FC, HTMLProps } from "react";
import styled from 'styled-components';

export interface Props extends HTMLProps<HTMLInputElement> {
   /**
    * 리벨명
    */
   label?: string;
   /**
    * 리벨 방향
    */
   labelArrow?: 'right' | 'left';
}

/**
 * 버튼 컴포넌트
 */
const Checkbox: FC<Props & {as?: any}> = ({ 
   className, 
   label,
   labelArrow = 'right',
   ...props
}) => {

   return (
      <Styled.CheckBox className={className} labelArrow={labelArrow}>
         {labelArrow === 'left' && <span>{label}</span>}
         <div className="checkWrap">
            <input type="checkbox" {...props} />
            <span className="checkmark"></span>
         </div>
         {labelArrow === 'right' && <span>{label}</span>}
      </Styled.CheckBox>
   );
}

const Styled = {
   CheckBox: styled.label<Props>`
      .checkWrap{
         position: relative;
         display: inline-block;
         vertical-align: middle;
         margin-right: ${props => props.labelArrow === 'right' ? '5px' : ''};
         margin-left: ${props => props.labelArrow === 'left' ? '5px' : ''};
      }
      
      input {
         opacity: 0;
         height: 18px;
         width: 18px;
      }
      .checkmark{
         position: absolute;
         top: 0;
         left: 0;
         height: 20px;
         width: 20px;
         border: solid 1px #c7c7c7;
      }
      .checkmark:after {
         content: "";
         position: absolute;
         display: none;
         left: 6px;
         top: 2px;
         width: 5px;
         height: 10px;
         border: solid #000;
         border-width: 0 3px 3px 0;
         transform: rotate(45deg);
      }
      input:checked ~ .checkmark {
         border-color: #525252;
      }
      input:checked ~ .checkmark:after {
         display: block;
      }
   `,
}

export default Checkbox;