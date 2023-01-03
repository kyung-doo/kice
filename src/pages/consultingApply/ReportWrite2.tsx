import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const ReportWrite2: FC = () => {

   return (
      <Styled.ReportWrite2>
         컨설팅 신청 및 보고 / 보고서 제출 / 사전협의서 작성
      </Styled.ReportWrite2>
   );
}


const Styled = {
   ReportWrite2: styled.div`
      
   `,
}


export default withLayout(ReportWrite2);