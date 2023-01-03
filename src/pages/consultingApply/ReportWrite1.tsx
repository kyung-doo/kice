import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const ReportWrite1: FC = () => {

   return (
      <Styled.ReportWrite1>
         컨설팅 신청 및 보고 / 보고서 제출 / 결과보고서 작성
      </Styled.ReportWrite1>
   );
}


const Styled = {
   ReportWrite1: styled.div`
      
   `,
}


export default withLayout(ReportWrite1);