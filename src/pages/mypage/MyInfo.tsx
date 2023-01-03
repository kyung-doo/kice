import { FC, useCallback, useEffect, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";



const MyInfo: FC = () => {

   return (
      <Styled.MyInfo>
         마이페이지 / 나의 정보
      </Styled.MyInfo>
   );
}


const Styled = {
   MyInfo: styled.div`
      
   `,
}


export default withLayout(MyInfo);