import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const ReportMain: FC = () => {

   return (
      <Styled.ReportMain>
         컨설팅 신청 및 보고 / 보고서 제출 / 컨설팅 보고서 제출
      </Styled.ReportMain>
   );
}


const Styled = {
   ReportMain: styled.div`
      
   `,
}


export default withLayout(ReportMain);