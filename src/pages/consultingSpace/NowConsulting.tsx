import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const NowConsulting: FC = () => {

   return (
      <Styled.NowConsulting>
         컨설팅 공간 / 본 컨설팅
      </Styled.NowConsulting>
   );
}


const Styled = {
   NowConsulting: styled.div`
      
   `,
}


export default withLayout(NowConsulting);