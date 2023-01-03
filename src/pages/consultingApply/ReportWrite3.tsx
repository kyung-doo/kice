import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const ReportWrite3: FC = () => {

   return (
      <Styled.ReportWrite3>
         컨설팅 신청 및 보고 / 보고서 제출 / 최종결과보고서 작성
      </Styled.ReportWrite3>
   );
}


const Styled = {
   ReportWrite3: styled.div`
      
   `,
}


export default withLayout(ReportWrite3);