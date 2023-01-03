import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const FaqView: FC = () => {

   return (
      <Styled.FaqView>
         컨설팅 센터 / FAQ / 보기
      </Styled.FaqView>
   );
}


const Styled = {
   FaqView: styled.div`
      
   `,
}


export default withLayout(FaqView);