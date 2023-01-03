import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../layout/withLayout";




const Main: FC = () => {

   return (
      <Styled.Main>
         메인
      </Styled.Main>
   );
}


const Styled = {
   Main: styled.div`
      
   `,
}


export default withLayout(Main);