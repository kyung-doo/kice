import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import ContentsTitle from "../../components/ContentsTitle";

const NowConsulting: FC = () => {

   return (
      <Styled.NowConsulting>
         <ContentsTitle depth1={'컨설팅 공간'} depth2={'본 컨설팅'}  />
      </Styled.NowConsulting>
   );
}


const Styled = {
   NowConsulting: styled.div`
      
   `,
}


export default withLayout(NowConsulting);