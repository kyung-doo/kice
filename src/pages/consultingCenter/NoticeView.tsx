import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const NoticeView: FC = () => {

   return (
      <Styled.NoticeView>
         컨설팅 센터 / 공지사항 / 보기
      </Styled.NoticeView>
   );
}


const Styled = {
   NoticeView: styled.div`
      
   `,
}


export default withLayout(NoticeView);