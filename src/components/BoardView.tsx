import { FC, HTMLProps } from "react";
import styled, { css } from 'styled-components';




export interface Props extends HTMLProps<HTMLDivElement> {
 
}

/**
 * 게시판 상세 컴포넌트
 */
const BoardView: FC<Props & {as?: any}> = ({ 
   className,
   ...props
}) => {
   return (
      <Styled.BoardView>
       
      </Styled.BoardView>
   );
}

const Styled = {
   BoardView: styled.div<Props>`
      
   `,
}

export default BoardView;