import { createContext, FC, HTMLProps } from "react";
import styled from 'styled-components';


export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 활성화 라디오 값
    */
   value?: string;
   /**
    * 라디오 방향
    */
   arrow?: 'ver' | 'hor';
   /**
    * 라디오 선택 변경
    */
   onChange?: (value: any) => void;
   /**
    * 타이틀 있을시에
    */
   titld ?: string;
}


export const RadioContext = createContext({});

/**
 * radioGroup 컴포넌트
 */
const RadioGroup: FC<Props & {as?: any}> = ({ 
   className, 
   value,
   arrow="ver",
   onChange,
   children,
   title,
   ...props
}) => {

   return (
      <>
         {
            title && <div className="mb10">{title}</div>
         }
      <Styled.RadioGroup className={className} arrow={arrow} {...props}>
         <RadioContext.Provider value={[value, onChange]}>
            {children}
         </RadioContext.Provider>
      </Styled.RadioGroup>
      </>
   );
}

const Styled = {
   RadioGroup: styled.div<Props>`
      display: flex;
      flex-direction: ${props => props.arrow === 'ver' ? 'column' : 'row'};
      > label {
         &:not(:first-child){
            margin-top: ${(props => props.arrow === 'ver' ? '10px' : 0)};
            margin-left: ${(props => props.arrow === 'hor' ? '10px' : 0)};
         }
      }
   `,
}

export default RadioGroup;