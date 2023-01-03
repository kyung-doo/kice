import { FC, useCallback, useEffect, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";



const ReceiveNote: FC = () => {

   return (
      <Styled.ReceiveNote>
         마이페이지 / 받은 쪽지
      </Styled.ReceiveNote>
   );
}


const Styled = {
   ReceiveNote: styled.div`
      
   `,
}


export default withLayout(ReceiveNote);