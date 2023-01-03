import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const PreConference: FC = () => {

   return (
      <Styled.PreConference>
         컨설팅 공간 / 사전협의안내
      </Styled.PreConference>
   );
}


const Styled = {
   PreConference: styled.div`
      
   `,
}


export default withLayout(PreConference);