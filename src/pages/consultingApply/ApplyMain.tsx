import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const ApplyMain: FC = () => {

   return (
      <Styled.ApplyMain>
         컨설팅 신청 및 보고 / 신청 / 컨설팅 신청 인트로
      </Styled.ApplyMain>
   );
}


const Styled = {
   ApplyMain: styled.div`
      
   `,
}


export default withLayout(ApplyMain);