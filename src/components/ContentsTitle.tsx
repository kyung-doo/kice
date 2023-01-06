import { FC, HTMLProps } from "react";
import styled, { css } from 'styled-components';




export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 1depth 타이틀
    */
    depth1 : string;
   /**
    * 2depth 타이틀
    */
    depth2 : string;
}

/**
 * 컨텐츠 타이틀 컴포넌트
 */
const ContentsTitle: FC<Props & {as?: any}> = ({ 
   className,
   ...props
}) => {
   return (
      <Styled.ContentsTitle className={className} {...props}>
         <h2>{props.depth2}</h2>
         <ul>
            <li>홈</li>
            <li>{props.depth1}</li>
            <li className="arrowNone">{props.depth2}</li>
         </ul>

      </Styled.ContentsTitle>
   );
}

const Styled = {
   ContentsTitle : styled.div<Props>`
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;
      ul{
         display: flex;
         li:not(.arrowNone){
            &:after{
               content:'>';
               display: inline-block;
               position: relative;
               margin: 0 10px;
            }
         }
      }
   `,
}


export default ContentsTitle;