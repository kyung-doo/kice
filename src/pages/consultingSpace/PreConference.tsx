import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import Button from "../../components/Button";
import ContentsTitle from "../../components/ContentsTitle";

const PreConference: FC = () => {

   return (
      <Styled.PreConference>
         <ContentsTitle depth1={'컨설팅 공간'} depth2={'사전협의안내'}  />
         <p>안내 콘텐츠 들어갈 예정</p>
         <Button>사전협의공간 입장</Button>
      </Styled.PreConference>
   );
}


const Styled = {
   PreConference: styled.div`
      
   `,
}


export default withLayout(PreConference);