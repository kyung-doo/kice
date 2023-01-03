import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';



const NoticeBoard: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   return (
      <Styled.NoticeBoard>
         컨설팅 센터 / 공지사항 / 목록
      </Styled.NoticeBoard>
   );
}


const Styled = {
   NoticeBoard: styled.div`
      
   `,
}


export default withLayout(NoticeBoard);
