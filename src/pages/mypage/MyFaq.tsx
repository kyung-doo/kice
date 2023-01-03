import { FC, useCallback, useEffect, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";



const MyFaq: FC = () => {

   return (
      <Styled.MyFaq>
         마이페이지 / 나의 문의
      </Styled.MyFaq>
   );
}


const Styled = {
   MyFaq: styled.div`
      
   `,
}


export default withLayout(MyFaq);