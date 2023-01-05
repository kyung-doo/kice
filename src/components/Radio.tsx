import { ChangeEvent, FC, HTMLProps, useContext } from "react";
import styled from 'styled-components';
import { RadioContext } from "./RadioGroup";


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
 * radio 컴포넌트
 */
const Radio: FC<Props & {as?: any}> = ({ 
   className, 
   label,
   labelArrow = 'right',
   value,
   ...props
}) => {

   const [_value, onChange] = useContext<any>(RadioContext);

   return (
      <Styled.Radio className={className} labelArrow={labelArrow}>
         {labelArrow === 'left' && <span>{label}</span>}
         <div className="checkWrap">
            <input 
               type="radio" 
               value={value}
               checked={_value !== undefined ? value === _value : undefined} 
               onChange={(e:ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)}
               {...props} 
            />
            <span className="radiokmark"></span>
         </div>
         {labelArrow === 'right' && <span>{label}</span>}
      </Styled.Radio>
   );
}

const Styled = {
   Radio: styled.label<Props>`
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
      .radiokmark{
         position: absolute;
         top: 0;
         left: 0;
         height: 20px;
         width: 20px;
         border: solid 1px #c7c7c7;
         border-radius: 50%;
      }
      .radiokmark:after {
         content: "";
         position: absolute;
         display: none;
         left: 4px;
         top: 4px;
         width: 10px;
         height: 10px;
         background-color: #000;
         border-radius: 50%;
      }
      input:checked ~ .radiokmark {
         border-color: #525252;
      }
      input:checked ~ .radiokmark:after {
         display: block;
      }
   `,
}

export default Radio;