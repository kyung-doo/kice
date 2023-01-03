import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const ApplyWrite: FC = () => {

   return (
      <Styled.ApplyWrite>
         컨설팅 신청 및 보고 / 신청 / 컨설팅 신청
      </Styled.ApplyWrite>
   );
}


const Styled = {
   ApplyWrite: styled.div`
      
   `,
}


export default withLayout(ApplyWrite);