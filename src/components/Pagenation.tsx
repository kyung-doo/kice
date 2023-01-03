import { FC, HTMLProps } from "react";
import styled, { css } from 'styled-components';




export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 총리스트 개수
    */
   listLength: number;
   /**
    * 보여질 리스트 개수
    */
   listView: number;
   /**
    * 보여질 페이지 개수
    */
   pageView: number;
   /**
    * 현재 페이지 넘버
    */
   currentPage: number;
   /**
    * 페이지 클릭시 콜백
    */
   onPage?: (idx: number) => void;
}

/**
 * 버튼 컴포넌트
 */
const Pagenation: FC<Props & {as?: any}> = ({ 
   className,
   ...props
}) => {

   return (
      <Styled.Pagenation className={className} {...props}>
         페이지네이션
      </Styled.Pagenation>
   );
}

const Styled = {
   Pagenation: styled.div<Props>`
      
   `,
}

export default Pagenation;