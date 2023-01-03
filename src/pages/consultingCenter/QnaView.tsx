import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const QnaView: FC = () => {

   return (
      <Styled.QnaView>
         컨설팅 센터 / Q&A / 보기
      </Styled.QnaView>
   );
}


const Styled = {
   QnaView: styled.div`
      
   `,
}


export default withLayout(QnaView);